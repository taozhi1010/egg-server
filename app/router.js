'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller,
    } = app;
    router.get('/', controller.home.index);
    router.resources('users', '/users', controller.users);
    router.post('login', '/login', controller.admin.index);
};