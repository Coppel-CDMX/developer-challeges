import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    },
    idUser: {
        type: DataTypes.INTEGER
    }
}, )