app.controller('headerController', ['$scope', '$location', function($scope, $location) {
	//获取当前路由关键字
	$scope.pathKeyword = $location.path().replace(/\//, '');

	//设置user href
	if ($scope.pathKeyword == 'user') {
		$scope.pageHref = "#main"
	} else {
		$scope.pageHref = "#user"
	}

}]);