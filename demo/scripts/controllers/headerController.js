app.controller('headerController', ['$scope', '$location', function($scope, $location) {
	//初始化
	// $scope.initHeader = {
	// 	title:'',
	// 	btnBack:false,
	// 	btnSearch:false,
	// 	btnHome:false,
	// 	btnCancel:false,
	// 	contSearch:false
	// };

	$scope.initHeader = $scope.$parent.initArticleList;

	//初始化header的视图
	// $scope.$on('makeHeaderView', function (e, data) {
	// 	console.log(data);
	// 	$scope.initHeader = data;
	// });

	//点击菜单切换内容
	$scope.goTarget = function(targetKey){
		$location.path('/' + targetKey);//切换内容
	};

}]);