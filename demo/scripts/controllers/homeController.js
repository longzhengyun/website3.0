app.controller('homeController', ['$scope', '$state', 'dataService', 'ARTICLE_DATA', 'SITE_DATA', 'CASE_DATA', function($scope, $state, dataService, ARTICLE_DATA, SITE_DATA, CASE_DATA) {
	//初始化数据
	$scope.initData = {
		itemName:'首页',
		articleData:'',
		siteData:'',
		caseData:''
	};

	//推荐文章
	dataService.getData(ARTICLE_DATA).success(function(data){
		$scope.initData.articleData = data;
	});

	//推荐网站
	dataService.getData(SITE_DATA).success(function(data){
		$scope.initData.siteData = data;
	});

	//案例展示
	dataService.getData(CASE_DATA).success(function(data){
		$scope.initData.caseData = data;
	});

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};

}]);