app.controller('homeController', ['$scope', '$state', 'dataService', function($scope, $state, dataService) {
	//初始化数据
	$scope.initData = {
		itemName:'首页',
		articleData:'',
		siteData:''
	};

	//推荐文章
	dataService.getData('article_data').success(function(data){
		$scope.initData.articleData = data.db_data;
	});

	//推荐网站
	dataService.getData('site_data').success(function(data){
		$scope.initData.siteData = data.db_data;
	});

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};

}]);