app.controller('articleDetailController', ['$scope', '$location', 'dataService', function($scope, $location, dataService) {
	//初始化
	$scope.initHeader = {
		title:'文章详情',
		btnBack:true,
		btnHome:true
	};

	var detailPath = $location.path();
	var id = detailPath.substr(detailPath.lastIndexOf('/') + 1);

	//获取文章数据
	dataService.getData('article_data').success(function(data){
		$scope.articleData = data.db_data;
		angular.forEach($scope.articleData, function(value){
			if(value.id == id){
				$scope.detailData = value;
			}
		});
	});

}]);