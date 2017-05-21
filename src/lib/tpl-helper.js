/**
 * nunjucks command
 */

// 引入外部CSS
export const importCSS = (href) => {
	return '<link href="' + href + '" media="all" rel="stylesheet" type="text/css" />'
}

// 引入外部JS
export const importJS = (src) => {
	return '<script src="' + src + '"></script>'
}

// JSON序列化
export const jsonEncode = (obj) => {
	return JSON.stringify(obj)
}

// 对象是否存在
export const exists = (obj) => {
	let result = obj != null;
	if (result) {
		if ( Array.isArray(obj) ) {
			result = obj.length > 0;
		} else if (typeof obj === 'string') {
			result = obj.trim() !== '';
		}
	}
	return result;
};