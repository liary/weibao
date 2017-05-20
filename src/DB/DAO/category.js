import Category from '../model/category'

export const add = async ({
	id,
	parentId,
	status,
	limit,
	name,
	priority
}) => {
	const params = {
		id: id,
		parentId: parentId,
		name: name,
		status: status,
		limit: limit,
		priority: priority
	}
	return Category.create(params)
}