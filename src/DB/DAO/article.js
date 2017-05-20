import Article from '../model/article'

export const add = async ({
	id,
	createTime,
	pushTime,
	status,
	content,
	category,
	author,
	priority
}) => {
	const params = {
		id: id,
		createTime: createTime,
		pushTime: pushTime,
		status: status,
		content: content,
		category: category,
		author: author,
		priority: priority
	}
	return Article.create(params)
}