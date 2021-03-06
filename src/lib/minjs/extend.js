/**
 * String 对象添加 hashCode 功能
 * 
 * @author      mufeng  <smufeng@gmail.com>
 * @version     0.1     <2015-04-26>
 * @link        http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }

    return hash;
}

/**
 * String 将首字符大写，其他小写
 */
String.prototype.toUpFirst = function() {
    var str = this.toLowerCase();

    str = str[0].toUpperCase() + str.slice(1);

    return str;     // 返回新的字符串
}

/**
 * Array findBy 工具函数，通过给定的key和值反向查找数据
 * eg: var test = [
 *     {name: "jack", age: 23, work: true},
 *     {name: "tom",  age: 24, work: false},
 *     {name: "tony", age: 22, work: false},
 *     {name: "kidy", age: 26, work: true},
 * ]
 *     test.findBy("name", "tony")
 * ret:  {name: "tony", age: 22, work: false}
 *     test.findBy("name", "tom", true)
 * ret:  1
 */

Array.prototype.findBy = function(key, val, index) {
    for(var i in this) {
        if (this[i][key] == val) {
            if (index != undefined) {
                if (index === true) {
                    return i;   // true 返回下标
                } else if (typeof index == "string") {
                    // 尝试返回指定的值
                    return this[i][index];
                }
            }

            return this[i]; // 默认返回对象
        }
    }

    return undefined;
}

/* 检测当前数组是否包含某元素 */
Array.prototype.findIn = function(val) {
    for(var i=0; i<this.length; i++) {
        if (this[i] == val) {
            return true;
        }
    }

    return false;
}

/* 删除数组中指定值 */
Array.prototype.delBy = function(val, all) {
    for(var i=0; i<this.length; i++) {
        if (this[i] == val) {
            this.splice(i, 1);
            if (!all) break;
        }
    }

    return this;
}