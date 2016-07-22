app.controller('searchController', ['$scope', '$window', 'dataService', 'searchService', 'ARTICLE_DATA', function($scope, $window, dataService, searchService, ARTICLE_DATA) {
	//空对象转空数组
	function isEmptyObject(OBJ){
		if(typeof OBJ === 'object' && !(OBJ instanceof Array)){
			var hasProp = false;
			for(var prop in OBJ){
				hasProp = true;
				break;
			};
			if(!hasProp){
				return [];
			};
		}else{
			return OBJ;
		};
	};
	//获取本地用户数据
	$scope.localData = isEmptyObject(searchService.getLocalData());
	$scope.searchData = $scope.localData;

	//点击清空搜索内容
	$scope.clearSearch = function(){
		$scope.searchValue = '';
		$scope.searchResult = false;
		$scope.searchData = $scope.localData;
	};

	//点击按钮返回
	$scope.goBack = function(){
		$window.history.back();
	};

	//延迟
	function isDelay(fn, interval){
		var timer;//定时器
		return function(){
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
		if(!$scope.searchValue == ''){
			$scope.searchResult = true;
			//获取案例数据
			dataService.getData(ARTICLE_DATA).success(function(data){
				$scope.searchData = data;
			});
			//判断是否有重复
			var pushState = true;
			angular.forEach($scope.localData, function(value){
				if(value == $scope.searchValue){
					pushState = false;
				}
			});
			if(pushState){
				$scope.localData.push($scope.searchValue);
				searchService.setLocalDate($scope.localData); //本地存储用户数据
			};
		}else{
			// $scope.searchResult = false;
			// $scope.searchData = '';
			// console.log($scope.searchData);
		};
	}, 2000);

	//点击历史搜索
	$scope.searchHistory = function(item){
		$scope.searchValue = item;
	};

	//点击清空历史搜索
	$scope.clearHistory = function(){
		$scope.searchValue = '';
		$scope.searchData = '';
		$scope.localData = [];
		searchService.setLocalDate($scope.localData); //本地存储用户数据
	};

}]);