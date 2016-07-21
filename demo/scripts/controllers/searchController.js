app.controller('searchController', ['$scope', '$window', 'dataService', 'ARTICLE_DATA', function($scope, $window, dataService, ARTICLE_DATA) {
	//点击清空搜索内容
	$scope.clearSearch = function(){
		$scope.searchValue = '';
		$scope.searchResult = false;
	};

	//点击按钮返回
	$scope.goBack = function(){
		$window.history.back();
	};

	//搜索
	$scope.searchAction = function(item){
		$scope.searchResult = true;
		//获取案例数据
		dataService.getData(ARTICLE_DATA).success(function(data){
			$scope.searchData = data;
		});
	};

}]);