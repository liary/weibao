module.exports = {
	get: async (ctx, next) => {
        const data = {
			success: true
		}
        await next(data);
    }
}