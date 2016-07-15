app.controller('articleListController', ['$scope', function($scope) {
	//初始化
	$scope.initArticleList = {
		title:'前端文章',
		btnBack:false,
		btnSearch:true,
		btnHome:false,
		btnCancel:false,
		contSearch:false
	};
	
	//通知header初始化
	// $scope.$broadcast('makeHeaderView', $scope.initArticleList);
}]);