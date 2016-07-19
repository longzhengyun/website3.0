app.controller('articleListController', ['$scope', function($scope) {
	//初始化
	$scope.initHeader = {
		title:'前端文章',
		btnSearch:true
	};
	
	//通知header初始化
	// $scope.$broadcast('makeHeaderView', $scope.initArticleList);
}]);