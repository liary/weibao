import {add} from '../DAO/category'

const test = async (obj) => {
	await add(obj)
	console.log('success save category: \n' + JSON.stringify(obj))
}
test({
	id: 34 + parseInt(Math.random() * 10000),
	status: 1,
	limit: 4,
	priority: 0,
	parentId: 45,
	name: 'xds'
})