//配置模块
require.config({
	baseUrl: 'js/module'
});

//加载模块-rem 字号比例
require(['autoDPI'], function(){
	var docEl = document.documentElement;
	var clientWidth = docEl.clientWidth;
	if (!clientWidth) return;
		docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
});

//加载模块-判断运行环境
require(['operatingSystem', 'eventUtil'], function(operatingSystem, eventUtil){
	var docBody = document.getElementsByTagName('body')[0];
	if(operatingSystem.versions.ios == true) {
		//iOS环境
		eventUtil.addClass(docBody, 'ios');
	}else if(operatingSystem.versions.android == true) {
		//Android环境
		eventUtil.addClass(docBody, 'android');
	}else{
		//PC环境
		eventUtil.addClass(docBody, 'pc');
	};
	if(operatingSystem.versions.weixin == true) {
		//微信环境
		eventUtil.addClass(docBody, 'weixin');
	};

	//ajax调用数据
	require(['loadState', 'parseStringToHTML', 'ajaxHandler'], function(loadState, parseStringToHTML){
		ajax().before(function(){
			loadState.addLoadState();//加载load状态
		}).get('/data/dom.json', 'json').success(function(ajaxData){
			var mainMenu = parseStringToHTML(ajaxData.mainMenu);//获取JSON数据并解析-导航
			var mainLogo = parseStringToHTML(ajaxData.mainLogo);//获取JSON数据并解析-LOGO
			var mainContent = parseStringToHTML(ajaxData.mainContent);//获取JSON数据并解析-内容区
			var container = document.getElementById('container');
				container.appendChild(mainMenu);
				container.appendChild(mainLogo);
				container.appendChild(mainContent);
		}).always(function(){
			loadState.delLoadState();//删除load状态
		});
	});
});