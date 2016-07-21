app.controller('searchController', ['$scope', '$window', 'dataService', 'searchService', 'ARTICLE_DATA', function($scope, $window, dataService, searchService, ARTICLE_DATA) {
	//获取本地用户数据
	$scope.localData = searchService.getLocalData();

	$scope.searchData = $scope.localData;

	//点击清空搜索内容
	$scope.clearSearch = function(){
		$scope.searchValue = '';
		$scope.searchResult = false;
		$scope.searchData = $scope.localData;
		$scope.searchCount = 0;
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
			$scope.searchCount = data.length;
		});
		$scope.localData = $scope.searchValue;
		searchService.setLocalDate($scope.localData); //本地存储用户数据
	};

	//点击清空历史搜索
	$scope.clearHistory = function(){
		$scope.localData = '';
		$scope.searchData = $scope.localData;
		searchService.setLocalDate($scope.localData); //本地存储用户数据
	};

}]);