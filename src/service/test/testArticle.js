import {add} from '../DAO/article'
console.log(add)
const test = async (obj) => {
	await add(obj)
	console.log('success save article: \n' + JSON.stringify(obj))
}
test({
	id: 34 + parseInt(Math.random() * 10000),
	createTime: 1234567891,
	pushTime: 1234567891,
	status: 1,
	content: 'dsfsd',
	priority: 0,
	category: 45,
	author: 'xds'
})