module.exports = (options, app) => {
    return async function(ctx, next) {

        await next();
        // if (ctx.url == "/login") {
        //     //登陆 无需验证token
        //     await next();
        // } else {
        //     //需验证token
        //     let token = ctx.headers.authorization ? ctx.headers.authorization : ''
        //     token = token.substring(6); //把Bearer 截取掉，解析的时候不需要加上Bearer 
        //     try {
        //         const decode = await app.jwt.verify(token, app.config.jwt.secret);
        //         await next();
        //     } catch (err) {
        //         if (err.name == "TokenExpiredError") {
        //             ctx.status = 200;
        //             ctx.body = {
        //                 code: 999,
        //                 message: 'token过期请重新登陆',
        //                 data: null
        //             }
        //         }
        //         ctx.status = 200;
        //         ctx.body = {
        //             code: 999,
        //             message: 'token失效或解析错误',
        //             data: null
        //         }
        //     }
        // }

        //拿到不需要验证的token的路由
        // const routerAuth = app.config.routerAuth;
        // //获取当前路由
        // const url = ctx.url;
        // //判断当前路由是否需要验证token
        // const flag = routerAuth.includes(url)
        // if (flag) {
        //     await next();
        // } else {
        //     //获取token,如果没有传入token，则为空
        //     var token = ctx.headers.authorization ? ctx.headers.authorization : '';
        //     token.substring(7) //把Bearer 截取掉，解析的时候不需要加上Bearer 
        //         ​
        //         // 解析token 

        //     try {
        //         const decode = await app.jwt.verify(token, app.config.jwt.secret);
        //         ctx.state.userinfo = decode;
        //         await next();
        //     } catch (err) {
        //         ctx.status = 401;
        //         ctx.body = {
        //             code: 401,
        //             message: 'token失效或解析错误',
        //             data: null
        //         }
        //     }​
        // }​
    }
}