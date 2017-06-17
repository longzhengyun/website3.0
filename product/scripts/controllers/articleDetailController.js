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
				$scope.detailData.date = $scope.detailData.date * 1000;//秒转毫秒

				var regexp = /\"\/content\/uploadfile\//g;//正则表达式匹配图片
				$scope.detailData.content = $scope.detailData.content.replace(regexp, '"/static/content/uploadfile/');//正则匹配替换文章图片路径
			}
		});
	});

}]);