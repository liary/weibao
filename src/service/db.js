import Sequelize from 'sequelize'
import config from './config'
export const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',
	omitNull: true,
	pool: {
		max: 5,
		min: 0,
		idle: 15000
	}
})