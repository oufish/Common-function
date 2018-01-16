/**
 * 判断dom是否包含class
 * auth  oufish 
 * @param 元素 el    ：div
 * @param {string} className    ：wrapper 
 */
export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
/**
 * 添加class
 * auth  oufish
 * @param 元素 el    ：div
 * @param {string} className    ：wrapper 
 */
export function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}