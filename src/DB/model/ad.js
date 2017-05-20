import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Ad = sequelize.define('ad', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	createTime: Sequelize.INTEGER,
	pushTime: Sequelize.INTEGER,
	status: Sequelize.INTEGER,
	content: Sequelize.STRING,
	priority: Sequelize.INTEGER
}, {
	timestamps: false
})

export default Ad