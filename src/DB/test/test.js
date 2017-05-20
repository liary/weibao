var register = require('babel-core/register');

register({
    presets: ['stage-3']
});

console.log('==-ad-==')
require('./testAd.js');
console.log('==-article-==')
require('./testArticle.js');
console.log('==-message-==')
require('./testMessage.js');
console.log('==-manager-==')
require('./testManager.js');
console.log('==-category-==')
require('./testCategory.js');