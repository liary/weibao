/**
 * 对制定对象的每个元素执行指定函数
 * @method each
 * @param {Object|Array|ArrayLike} obj 目标对象
 * @param {Function(value, key, obj)} callback 操作函数，上下文问当前元素。
 * 		当返回值为false时，遍历中断
 * @return {Object|Array|ArrayLike} 遍历对象
 */
exports.each = function(obj, callback) {
	if (obj != null) {
		const len = obj.length;
		if (len === undefined || typeof obj === 'function') {
			for(let i in obj) {
				if (false === callback.call(obj[i], obj[i], i, obj)) {
					break;
				}
			}
		} else {
			let i = -1;
			while (++i < len) {
				if (false === callback.call(obj[i], obj[i], i, obj)) {
					break;
				}
			}
		}
	}
}