module.exports = {
    'i': async (ctx, next) => {
        ctx.render('i.html', {
            title: 'Welcome'
        });
        await next();
    }
};