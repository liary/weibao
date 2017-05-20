/**
 * init routes
 * @author limama
 */
import fs from 'fs'
import _ from 'lodash'
import requireDir from 'require-dir'
import Router from 'koa-router'

const router = Router()
const viewsPath = './views'
const apiPath = './api'
const addRoute = (router, dirPath, useBasePath = false) => {
	const routes = requireDir(dirPath)
	const basePath = useBasePath ? (_.startsWith(dirPath, './') ? dirPath.substr(2, dirPath.length - 2) : dirPath) : ''
	_.forEach(routes, (subRoutes, key) => {
		const mpath = key === '__' ? '' : key
		_.forEach(subRoutes, (route, extendPaht) => {
			const path = ('/' + basePath + '/' + mpath + '/' + extendPaht).replace(/\/+/g, '/');
			router.get(path, async (ctx, next) => {
				ctx.viewPath = path;
				await route(ctx, next)
			})
			console.log(`register ${path} mapping`);
		})
	})
}
addRoute(router, viewsPath)
addRoute(router, apiPath, true)
export default router.routes()