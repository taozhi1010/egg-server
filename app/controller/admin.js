// app/controller/Login.js
const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}
class LoginController extends Controller {

    async index() {
        const {
            ctx,
            app
        } = this;

        const {
            userName,
            passWord
        } = ctx.request.body;

        let res = await ctx.model.Admin.findOne({
            where: {
                user_name: userName,
                pass_word: passWord
            }
        });
        if (!res) {
            ctx.body = {
                msg: "账号或密码错误",
                code: "0"
            };
            return;
        }

        const token = await app.jwt.sign({
            'user_name': userName,
            'pass_word': passWord //需要存储的 token 数据
        }, app.config.jwt.secret, {
            expiresIn: '10m'
        }); // 2分钟token过期

        //redis 缓存token  
        // this.service.redis.set(token, "token", 10);
        ctx.body = {
            message: "登陆成功",
            code: "1",
            data: {
                token: token
            }
        };
    }

    async cerate() {
        //注册
        const ctx = this.ctx;

        const {
            userName,
            passWord
        } = ctx.request.body;
        //验证账号是否被注册
        const res = await ctx.model.Admin.findOne({
            where: {
                user_name: userName,
            }
        });
        if (res) {
            ctx.body = {
                msg: "账号已被注册",
                code: "0"
            };
            return;
        }
        await ctx.model.Admin.create({
            user_name: userName + '',
            pass_word: passWord + ''
        });
        ctx.body = {
            msg: "账号注册成功",
            code: "1"
        };

    }

}

module.exports = LoginController;