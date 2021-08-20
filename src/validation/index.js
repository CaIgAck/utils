export function isObject(object) {
    // check object on null || undefined || object
    if(typeof object === 'object' && !!object && !Object.keys(object).length) return true
}
export function isArray(array) {
    // check array on null || undefined || array
   if(Array.isArray(array) && !array.length) return true
}
export function isNumber(number) {
    // check number on null || undefined || number
    if(!isNaN(number) && typeof number === "number" && !!number) return true
}
export function isString(string) {
    // check string on null || undefined || string
    if(typeof string === "string" && !string.length && !!string) return true
}
