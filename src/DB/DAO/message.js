import Message from '../model/message'

export const add = async ({
	id,
	name,
	phone,
	qq,
	weixin,
	content,
	email,
	status,
	pushTime
}) => {
	const params = {
		id: id,
		name: name,
		phone: phone,
		qq: qq,
		weixin: weixin,
		content: content,
		email: email,
		status: status,
		pushTime: pushTime
	}
	return Message.create(params)
}