app.controller('homeController', ['$scope', 'dataService', function($scope, dataService) {
	//初始化数据
	$scope.initData = {
		articleData:{},
		siteData:{},
		caseData:{}
	};

	//推荐文章
	dataService.getData('data/articleData.json').success(function(data){
		$scope.initData.articleData = data;
	});

	//推荐网站
	dataService.getData('data/siteData.json').success(function(data){
		$scope.initData.siteData = data;
	});

	//案例展示
	dataService.getData('data/caseData.json').success(function(data){
		$scope.initData.caseData = data;
	});

}]);