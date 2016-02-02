/*判断arr是否为一个数组，返回一个bool值
  在iframe里不能用instanceof判断类型
*/

function isArray(arr) {
    // your implement
	if(Object.prototype.toString.call(arr)=="[object Array]")
	return true;
	else
	return false;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
	if(typeof fn=== 'function')
	return true;
	else
	return false;
}
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
	var i;
	if(typeof src==='number'||typeof src==='string'||typeof src==='boolean'||typeof src==='object'||checkDate(src))
	{
		
	}
	function checkDate(obj){
    var strDate=obj.value;//获取对象的值
    re=/^(\d{4})(\d{2})(\d{2})$/g;//正则表达式
    if(re.test(strDate))//判断日期格式符合YYYY-MM-DD
    {
        return true;//是日期，返回true
    }
	else
	    return false;
}

	
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
	var newarr=[];
	for(var i=0;i<arr.length;i++)
	{
	 if(newarr.indexOf(arr[i])==-1;
		newarr.push(arr[i]);
	}
	return newarr;
}
// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var i;
    var j;
    for (i = 0; i < str.length; i++) { //从头遍历字符串
        if (str.charAt(i) != " " && str.charAt(i) != "\t") { //当不为空的时候
            break; //跳出循环
        }
    }
    for (j = str.length - 1; j >= 0; j--) {
        if (str.charAt(j) != " " && str.charAt(j) != "\t") { //当不为空的时候
            break; //跳出循环
        }
    }
    return str.slice(i, j + 1); //返回子字符串
}
// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
	if(str.length!=-1)
	return str.replace(/^\s+|^\s+$|^\t+|^\t+$/g,'');
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
}

// 其中fn函数可以接受两个参数：item和index
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    return Object.keys(obj).length;
}
// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
	var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
    
	return pattern.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
	var pattern=/^(\+\d{1,4})?\d{7,11}$/;//手机号前面有"+"号,可能为11位，也可能是8位
	return pattern.test(phone);
}
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
	 var oldClassName = element.className; //获取旧的样式类
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
	function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
 var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;

}
// your implement
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);  //IE9以前不支持addEventListener,并且第一个参数使用带"on"前缀的事件处理程序属性名
    }
}
// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if (element.removeEventListenr) {
        element.removeEventListenr(event, listener);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);//同上
    }
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function(event) {
        if (event.keyCode == 13) {
            listener();
        }
    });
}
