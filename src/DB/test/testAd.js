import {add, find} from '../DAO/ad'
console.log(add)
const test = async (obj) => {
	await add(obj)
	console.log('success save: \n' + JSON.stringify(obj))
}
test({
	id: 342342,
	createTime: 1234567891,
	pushTime: 1234567891,
	status: 1,
	content: 'dsfsd',
	priority: 0
})
// find(157473)
// const gets = () => {
// 	setTimeout(function() {
// 		return parseInt(Math.random() * 1000)
// 	}, 500)
// }
// const as = async (str) => {
// 	console.log(str)
// 	let strb = await gets() + str
// 	console.log('str is ll-' + strb)
// }
// as('sdf')
// as('zzsddsdsff')