import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Article = sequelize.define('article', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	createTime: Sequelize.INTEGER,
	pushTime: Sequelize.INTEGER,
	status: Sequelize.INTEGER,
	content: Sequelize.STRING,
	category: Sequelize.STRING,
	author: Sequelize.STRING,
	priority: Sequelize.INTEGER
}, {
	timestamps: false
})

export default Article