import {add} from '../DAO/message'

const test = async (obj) => {
	console.log('saving message...')
	try {
		await add(obj)
	} catch(err) {
		console.error(err)
	}
	console.log('success save message: \n' + JSON.stringify(obj))
}
test({
	id: 9 + parseInt(Math.random() * 10000),
	pushTime: 1234567891,
	status: 12,
	name: 'limama',
	phone: 12316780,
	qq: 2312312,
	weixin: 'sdf',
	content: 'sdfsdf',
	email: 'sdfsdf',
})