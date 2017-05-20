import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Manager = sequelize.define('manager', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: Sequelize.STRING,
	level: Sequelize.INTEGER,
	phone: Sequelize.INTEGER,
	qq: Sequelize.INTEGER,
	weixin: Sequelize.STRING,
	desc: Sequelize.STRING,
	email: Sequelize.STRING,
	status: Sequelize.INTEGER,
	serviceTime: Sequelize.INTEGER,
	passWord: Sequelize.STRING,
	token: Sequelize.STRING
}, {
	timestamps: false
})
Manager.sync();

export default Manager