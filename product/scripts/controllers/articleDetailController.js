app.controller('articleDetailController', ['$scope', '$location', 'dataService', 'ARTICLE_DATA', function($scope, $location, dataService, ARTICLE_DATA) {
	//初始化
	$scope.initHeader = {
		title:'文章详情',
		btnBack:true,
		btnHome:true
	};

	var detailPath = $location.path();
	var id = detailPath.substr(detailPath.lastIndexOf('/') + 1);

	//获取文章数据
	dataService.getData(ARTICLE_DATA).success(function(data){
		$scope.articleData = data;
		angular.forEach($scope.articleData, function(value){
			if(value.id == id){
				$scope.detailData = value;
			}
		});
	});

}]);