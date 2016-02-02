/*�ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
  ��iframe�ﲻ����instanceof�ж�����
*/

function isArray(arr) {
    // your implement
	if(Object.prototype.toString.call(arr)=="[object Array]")
	return true;
	else
	return false;
}

// �ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(fn) {
    // your implement
	if(typeof fn=== 'function')
	return true;
	else
	return false;
}
// ʹ�õݹ���ʵ��һ����ȿ�¡�����Ը���һ��Ŀ����󣬷���һ����������
// �����ƵĶ������ͻᱻ����Ϊ���֡��ַ��������������ڡ����顢Object���󡣲��������������������
function cloneObject(src) {
    // your implement
	var i;
	if(typeof src==='number'||typeof src==='string'||typeof src==='boolean'||typeof src==='object'||checkDate(src))
	{
		
	}
	function checkDate(obj){
    var strDate=obj.value;//��ȡ�����ֵ
    re=/^(\d{4})(\d{2})(\d{2})$/g;//������ʽ
    if(re.test(strDate))//�ж����ڸ�ʽ����YYYY-MM-DD
    {
        return true;//�����ڣ�����true
    }
	else
	    return false;
}

	
}

// ����������
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
// ���������ȥ�ز�����ֻ����������Ԫ��Ϊ���ֻ��ַ���������һ��ȥ�غ������
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
// �м���ͬѧ��������
// ʵ��һ���򵥵�trim����������ȥ��һ���ַ�����ͷ����β���Ŀհ��ַ�
// �ٶ��հ��ַ�ֻ�а�ǿո�Tab
// ��ϰͨ��ѭ�����Լ��ַ�����һЩ�����������ֱ�ɨ���ַ���strͷ����β���Ƿ��������Ŀհ��ַ�������ɾ�����ǣ���󷵻�һ�����ȥ�����ַ���
function simpleTrim(str) {
    var i;
    var j;
    for (i = 0; i < str.length; i++) { //��ͷ�����ַ���
        if (str.charAt(i) != " " && str.charAt(i) != "\t") { //����Ϊ�յ�ʱ��
            break; //����ѭ��
        }
    }
    for (j = str.length - 1; j >= 0; j--) {
        if (str.charAt(j) != " " && str.charAt(j) != "\t") { //����Ϊ�յ�ʱ��
            break; //����ѭ��
        }
    }
    return str.slice(i, j + 1); //�������ַ���
}
// �ܶ�ͬѧ�϶���������Ĵ��뿴����ȥ������������������ʵ��һ��trim
// ���ַ���ͷβ���пո��ַ���ȥ��������ȫ�ǰ�ǿո�Tab�ȣ�����һ���ַ���
// ����ʹ��һ�м���������ʽ��ɸ���Ŀ
function trim(str) {
    // your implement
	if(str.length!=-1)
	return str.replace(/^\s+|^\s+$|^\t+|^\t+$/g,'');
}
// ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
function each(arr, fn) {
    // your implement
}

// ����fn�������Խ�������������item��index
// ��ȡһ�����������һ��Ԫ�ص�����������һ������
function getObjectLength(obj) {
    return Object.keys(obj).length;
}
// �ж��Ƿ�Ϊ�����ַ
function isEmail(emailStr) {
    // your implement
	var pattern = /^(\w+\.)*\w+@\w+(\.\w+)+$/;
    
	return pattern.test(emailStr);
}

// �ж��Ƿ�Ϊ�ֻ���
function isMobilePhone(phone) {
    // your implement
	var pattern=/^(\+\d{1,4})?\d{7,11}$/;//�ֻ���ǰ����"+"��,����Ϊ11λ��Ҳ������8λ
	return pattern.test(phone);
}
// Ϊelement����һ����ʽ��ΪnewClassName������ʽ
function addClass(element, newClassName) {
    // your implement
	 var oldClassName = element.className; //��ȡ�ɵ���ʽ��
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}

// �Ƴ�element�е���ʽoldClassName
function removeClass(element, oldClassName) {
    // your implement
}

// �ж�siblingNode��element�Ƿ�Ϊͬһ����Ԫ���µ�ͬһ����Ԫ�أ�����boolֵ
function isSiblingNode(element, siblingNode) {
    // your implement
	function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

}

// ��ȡelement�������������ڵ�λ�ã�����һ������{x, y}
function getPosition(element) {
    // your implement
 var pos = {};
    pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return pos;

}
// your implement
// ��һ��element��һ�����event�¼�����Ӧ����Ӧ����Ϊlistener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);  //IE9��ǰ��֧��addEventListener,���ҵ�һ������ʹ�ô�"on"ǰ׺���¼��������������
    }
}
// �Ƴ�element�������event�¼�����ʱִ��listener����Ӧ
function removeEvent(element, event, listener) {
    if (element.removeEventListenr) {
        element.removeEventListenr(event, listener);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);//ͬ��
    }
}
// ʵ�ֶ�click�¼��İ�
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// ʵ�ֶ��ڰ�Enter��ʱ���¼���
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function(event) {
        if (event.keyCode == 13) {
            listener();
        }
    });
}
