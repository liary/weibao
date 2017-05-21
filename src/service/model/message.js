import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Message = sequelize.define('message', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: Sequelize.STRING,
	phone: Sequelize.INTEGER,
	qq: Sequelize.INTEGER,
	weixin: Sequelize.STRING,
	content: Sequelize.STRING,
	email: Sequelize.STRING,
	status: Sequelize.INTEGER,
	pushTime: Sequelize.INTEGER
}, {
	timestamps: false
})
Message.sync();

export default Message