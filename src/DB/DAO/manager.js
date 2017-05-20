import Manager from '../model/manager'

export const add = async ({
	id,
	name,
	phone,
	qq,
	weixin,
	desc,
	email,
	status,
	serviceTime,
	passWord,
	level,
	token
}) => {
	const params = {
		id: id,
		name: name,
		phone: phone,
		qq: qq,
		weixin: weixin,
		desc: desc,
		email: email,
		status: status,
		serviceTime: serviceTime,
		passWord: passWord,
		level: level,
		token: ''
	}
	return Manager.create(params)
}