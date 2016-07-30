//模块-解析HTML字符串
define('parseStringToHTML', function(){
	var parseStringToHTML = function(text){
		var i, a = document.createElement("div"), b = document.createDocumentFragment();
			a.innerHTML = text;
		while (i = a.firstChild) b.appendChild(i);
		return b;
	};//解析HTML字符串
	return parseStringToHTML;
});