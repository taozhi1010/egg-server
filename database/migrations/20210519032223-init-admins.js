'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const {
            INTEGER,
            DATE,
            STRING,
        } = Sequelize;
        await queryInterface.createTable('admins', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_name: STRING(30),
            pass_word: STRING(30),
            created_at: DATE,
            updated_at: DATE,
        });
    },
    // 在执行数据库降级时调用的函数，删除 users 表
    down: async queryInterface => {
        await queryInterface.dropTable('admins');
    },
};