//模块-事件处理
define('eventUtil', function(){
	var eventUtil = {
		addHandler: function(element, type, handler){
			if(element.addEventListener){
				element.addEventListener(type, handler, false);
			}else if(element.attachEvent){
				element.attachEvent('on' + type, handler);
			}else{
				element['on' + type] = handler;
			};
		},//绑定事件
		removeHandler: function(element, type, handler){
			if(element.addEventListener){
				element.removeEventListener(type, handler, false);
			}else if(element.attachEvent){
				element.detachEvent('on' + type, handler);
			}else{
				element['on' + type] = null;
			};
		},//移除绑定事件
		getEvent: function(event){
			return event ? event : window.event;
		},//返回对event对象引用的兼容实现
		getTarget: function(event){
			return event.target || event.srcElement;
		},//返回事件目标的兼容实现
		preventDefault: function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue = false;
			}
		},//取消事件默认行为的兼容实现
		stopPropagation: function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
		},//阻止事件冒泡的兼容实现
		getElementsByClassName: function(oParent, sClass){
			var aEle = oParent.getElementsByTagName('*'), aResult = [];
			var re = new RegExp('\\b'+sClass+'\\b', 'i');

			for(var i = 0; i < aEle.length; i ++){
				if(re.test(aEle[i].className)){
					aResult.push(aEle[i]);
				}
			}
			return aResult;
		},//按类名获取元素
		hasClass: function(obj, cls){
			return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		},//获取类名元素
		addClass: function(obj, cls){
			if (!this.hasClass(obj, cls)) obj.className += ' ' + cls;
		},//添加类名
		removeClass: function(obj, cls){
			if (hasClass(obj, cls)) {
				var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
				obj.className = obj.className.replace(reg, ' ');
			}
		},//删除类名
		toggleClass: function(obj, cls){
			if(hasClass(obj, cls)){
				removeClass(obj, cls);
			}else{
				addClass(obj, cls);
			}
		}//切换类名
	}
	return eventUtil;
});