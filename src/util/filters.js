/** 
 * 全局过滤器 
 * 
 * 
 * 
*/
// 该过滤器是为了提取数据中的图片数据（示例）
const formaImg = function(val) {
    val =  decodeURIComponent(val).replace(/\/agent\//,'');
    return val;
}

export default {
    formaImg
}