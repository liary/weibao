import koa from 'koa'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'koa-logger'
import static from 'koa-static'
// import cookieParser from 'cookie-parser'
import BodyParser from 'body-parser'
import Routes from './src/routes/init'

const app = new koa()

const isProduction = process.env.NODE_ENV === 'production';

app.use(async (ctx, next) => {
	console.log(`process ${ctx.request.method} ${ctx.request.url}`)
	const start = new Date().getTime()
	await next()
	const execTime = new Date().getTime() - start
	ctx.response.set('X-Response-Time', `${execTime}ms`)
})
app.use(BodyParser())

// static file
const staticPath = './static'
app.use(convert(static(
	path.join(__dirname, staticPath)
)))

app.use(Routes())
app.listen(3311)
console.log('now server started at port 3311')