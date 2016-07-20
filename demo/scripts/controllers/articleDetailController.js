app.controller('articleDetailController', ['$scope', 'dataService', '$location', function($scope, dataService, $location) {
	//初始化
	$scope.initHeader = {
		title:'文章详情',
		btnBack:true,
		btnHome:true
	};

	var detailPath = $location.path();
	var id = detailPath.substr(detailPath.lastIndexOf('/') + 1);

	//获取文章数据
	dataService.getData('data/articleData.json').success(function(data){
		$scope.articleData = data;
		angular.forEach($scope.articleData, function(value){
			if(value.id == id){
				$scope.detailData = value;
			}
		});
	});

}]);