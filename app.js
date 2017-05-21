import koa from 'koa'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'koa-logger'
import staticFile from 'koa-static'
// import cookieParser from 'cookie-parser'
import BodyParser from 'body-parser'
import Routes from './src/routes/init'
import _debug from 'debug'
import nunjucks from 'nunjucks'
import * as tplHelpers from './src/lib/tpl-helper'

const app = new koa()
const debug = _debug('process status:')

const isProduction = process.env.NODE_ENV === 'production';

app.use(async (ctx, next) => {
	debug(`process ${ctx.request.method} ${ctx.request.url}`)
	const start = new Date().getTime()
	await next()
	const execTime = new Date().getTime() - start
	ctx.response.set('X-Response-Time', `${execTime}ms`)
})
app.use(BodyParser())

// static file
const staticPath = './static'
app.use(convert(staticFile(
	path.join(__dirname, staticPath)
)))

/**
 * add nunjucks
 * add nunjucks' global function
 */
!function() {
	const njkEnv = new nunjucks.Environment(
		new nunjucks.FileSystemLoader('views', {
			noCache: app.get('env') === 'development',
			watch: app.get('env') === 'development',
		}), {
			trimBlocks: true,
			lstripBlocks: true,
		}
	);

	for (let i in tplHelpers) {
		njkEnv.addGlobal(i, tplHelpers[i]);
	}

	njkEnv.express(app);
}()

app.use(Routes())
app.listen(3311)
console.log('now server started at port 3311')