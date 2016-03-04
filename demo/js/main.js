//配置依赖
require.config({
	paths:{
		'angular': 'angular.min'
	},
	shim:{
		'angular':{
			'exports': 'angular'
		}
	}
});

//定义模块
define(['controller', 'controllers']);