import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Category = sequelize.define('category', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	parentId: Sequelize.INTEGER,
	name: Sequelize.STRING,
	status: Sequelize.INTEGER,
	limit: Sequelize.INTEGER,
	priority: Sequelize.INTEGER
}, {
	timestamps: false
})
console.log('============++++++=========')
Category.sync()

export default Category