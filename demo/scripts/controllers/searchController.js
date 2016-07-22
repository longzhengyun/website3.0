app.controller('searchController', ['$scope', '$window', 'dataService', 'searchService', 'ARTICLE_DATA', function($scope, $window, dataService, searchService, ARTICLE_DATA) {
	//获取本地用户数据
	$scope.searchData = searchService.getLocalData();

	//定义一个数组存储searchValue
	$scope.localData = [];

	//点击清空搜索内容
	$scope.clearSearch = function(){
		$scope.searchValue = '';
		$scope.searchResult = false;
		$scope.searchData = searchService.getLocalData();
	};

	//点击按钮返回
	$scope.goBack = function(){
		$window.history.back();
	};

	//延迟
	function isDelay(fn, interval){
		var timer;//定时器
		return function(){console.log('a');
			if(timer){
				return false;
			};
			timer = setTimeout(function(){
				clearTimeout(timer);
				timer = null;
				fn.apply(this, arguments);
			}, interval || 500);
		};
	};

	//搜索
	$scope.searchAction = isDelay(function(){
		if($scope.searchValue == ''){
			$scope.searchResult = false;
			$scope.searchData = searchService.getLocalData();
		}else{
			$scope.searchResult = true;
			//获取案例数据
			dataService.getData(ARTICLE_DATA).success(function(data){
				$scope.searchData = data;
			});
			$scope.localData.push($scope.searchValue);
			searchService.setLocalDate($scope.localData); //本地存储用户数据
		};
	}, 2000);

	//点击清空历史搜索
	$scope.clearHistory = function(){
		$scope.searchValue = '';
		$scope.searchData = '';
		$scope.localData = [];
		searchService.setLocalDate($scope.localData); //本地存储用户数据
	};

}]);