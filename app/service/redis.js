const Service = require('egg').Service;
class RedisService extends Service {
    // 设置
    async set(key, value, seconds) {
            // seconds 有效时长
            let {
                redis
            } = this.app;
            value = JSON.stringify(value);
            if (!seconds) {
                await redis.set(key, value);
            } else {
                // 设置有效时间
                let redis_token = await redis.set(key, value, 'EX', seconds);
                console.log("redis_token设置成功========》", redis_token)
            }
        }
        // 获取
    async get(key) {
            let {
                redis
            } = this.app;
            let data = await redis.get(key);
            console.log("redis_token读取成功========》", data)
            if (!data) return;
            // data = JSON.parse(data);

            return data;
        }
        // 清空redis
    async flushall() {
        let {
            redis
        } = this.app;
        redis.flushall();
        return;
    }
}
module.exports = RedisService;