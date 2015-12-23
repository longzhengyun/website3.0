//配置模块
require.config({
	baseUrl: 'js/module'
});

//加载模块-判断运行环境
require(['operatingSystem', 'eventUtil'], function(operatingSystem, eventUtil){
	var docBody = document.getElementsByTagName('body')[0];
	if(operatingSystem.versions.ios == true || operatingSystem.versions.android == true) {
		//iOS环境
		eventUtil.addClass(docBody, 'mobile');

		//加载模块-rem 字号比例
		require(['autoDPI'], function(){
			var docEl = document.documentElement;
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
				docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
		});
	}else{
		//PC环境
		eventUtil.addClass(docBody, 'pc');
	};

	if(operatingSystem.versions.weixin == true) {
		//微信环境
		eventUtil.addClass(docBody, 'weixin');
	};
});