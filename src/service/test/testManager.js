import {add} from '../DAO/manager'

const test = async (obj) => {
	console.log('saving message...')
	try {
		await add(obj)
	} catch(err) {
		console.error(err)
	}
	console.log('success save manager: \n' + JSON.stringify(obj))
}
test({
	id: 9 + parseInt(Math.random() * 10000),
	serviceTime: 1234567891,
	status: 12,
	name: 'limama',
	phone: 12316780,
	qq: 2312312,
	weixin: 'sdf',
	email: 'sdfsdf',
	desc: 'sdfsdf',
	passWord: 'xxsdf',
	level: 3,
	token: ''
})