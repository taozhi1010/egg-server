'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Admin = app.model.define('admin', {
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
    return Admin;
};