/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1620704066188_2904';

    // add your middleware config here
    config.middleware = ["auth"];

    //token 密钥
    config.jwt = {
        secret: "taozhi"
    };

    //数据库
    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        password: "111222...aA",
        database: 'egg-sequelize-doc-default',
    };

    //redis数据库
    // config.redis = {
    //     client: {
    //         port: 6379, // Redis port
    //         host: '127.0.0.1', // Redis host
    //         password: '',
    //         db: 0
    //     }
    // };
    //处理跨域
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['*']
    }
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,Origin'
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};