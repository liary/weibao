import Ad from '../model/ad'

export const add = async ({
	id,
	createTime,
	pushTime,
	status,
	content,
	priority
}) => {
	const params = {
		id: id ? parseInt(Math.random() * 1000 * id) : 8989,
		createTime: createTime || 0,
		pushTime: pushTime || 0,
		content: content || '',
		status: status || -1,
		priority: 0
	}
	return Ad.create(params);
}

export const find = async (id) => {
	if (id || id === 0) {
		return Ad.findAll({
			where: {
				id: id
			},
			order: [ ['pushTime', 'DESC'] ]
		})
	} else {
		return Ad.findAll({
			where: {
				status: 1
			},
			order: [ ['pushTime', 'DESC'] ]
		})
	}
}