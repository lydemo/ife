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
/*
 * ��ȥ�����еĿ�Ԫ��
 */
function deleteBlank(arr) {
    var arr2 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].match(/\s+/) || arr[i] === "") {
            continue;
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
// ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
function each(arr, fn) {
    for (var i in arr) {
        fn(arr[i], i);
    }
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
// ʵ��һ���򵥵�Query
function $(selector) {

    if (!selector) {
        return null;
    }

    if (selector == document) {
        return document;
    }

    selector = trim(selector);
    if (selector.indexOf(" ") !== -1) { //�����ڿո�
        var selectorArr = selector.split(/\s+/); //�������

        var rootScope = myQuery(selectorArr[0]); //��һ�εĲ��ҷ�Χ
        var i = null;
        var j = null;
        var result = [];
        //ѭ��ѡ�����е�ÿһ��Ԫ��
        for (i = 1; i < selectorArr.length; i++) {
            for (j = 0; j < rootScope.length; j++) {
                result.push(myQuery(selectorArr[i], rootScope[j]));
            }
            // rootScope = result;
            // Ŀǰ�����������bug
        }
        return result[0][0];
    } else { //ֻ��һ����ֱ�Ӳ�ѯ
        return myQuery(selector, document)[0];
    }
}

/**
 * ���һ�����ݲ��ҽ�� success
 * @param  {String} selector ѡ��������
 * @param  {Element} root    ���ڵ�Ԫ��
 * @return {NodeList����}    �ڵ��б������Ƕ���ڵ�Ҳ������һ��
 */
function myQuery(selector, root) {
    var signal = selector[0]; //
    var allChildren = null;
    var content = selector.substr(1);
    var currAttr = null;
    var result = [];
    root = root || document; //��û�и�root����ֵdocument
    switch (signal) {
        case "#":
            result.push(document.getElementById(content));
            break;
        case ".":
            allChildren = root.getElementsByTagName("*");
            // var pattern0 = new RegExp("\\b" + content + "\\b");
            for (i = 0; i < allChildren.length; i++) {
                currAttr = allChildren[i].getAttribute("class");
                if (currAttr !== null) {
                    var currAttrsArr = currAttr.split(/\s+/);
                    // console.log(currAttr);
                    for (j = 0; j < currAttrsArr.length; j++) {
                        if (content === currAttrsArr[j]) {
                            result.push(allChildren[i]);
                            // console.log(result);
                        }
                    }
                }
            }
            break;
        case "[": //����ѡ��
            if (content.search("=") == -1) { //ֻ�����ԣ�û��ֵ
                allChildren = root.getElementsByTagName("*");
                for (i = 0; i < allChildren.length; i++) {
                    if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
                        result.push(allChildren[i]);
                    }
                }
            } else { //�������ԣ�����ֵ
                allChildren = root.getElementsByTagName("*");
                var pattern = /\[(\w+)\s*\=\s*(\w+)\]/; //Ϊ�˷���Ⱥ�ǰ�������
                var cut = selector.match(pattern); //�����Ľ����Ϊ����
                var key = cut[1]; //��
                var value = cut[2]; //ֵ
                for (i = 0; i < allChildren.length; i++) {
                    if (allChildren[i].getAttribute(key) == value) {
                        result.push(allChildren[i]);
                    }
                }
            }
            break;
        default: //tag
            result = root.getElementsByTagName(selector);
            break;
    }
    return result;
}

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
// �¼�����
function delegateEvent(element,tag,eventName,listener){
    addEvent(element, eventName, function(event){
        var target = event.target || event.srcElement;
        if(target.tagName.toLowerCase() == tag.toLowerCase()) {
            listener.call(target, event);
        }
    });
}
// ������ͬѧ�Ѿ���ʼ�²��ˣ���������һ��$�����ΰ�����ô�����������ǵ��¼����������·�װ�ı䣺

$.on = function(selector, event, listener) {
    addEvent($(selector), event, listener);
};
$.click = function(selector, listener) {
    addClickEvent($(selector), listener);
};
$.un = function(selector, event, listener) {
    removeEvent($(selector), event, listener);
};
$.delegate = function(selector, tag, event, listener) {
    delegateEvent($(selector), tag, event, listener);
};

