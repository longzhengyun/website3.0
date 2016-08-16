app.controller('homeController', ['$scope', 'dataService', function($scope, dataService) {
	//获取数据
	dataService.getData('scripts/htmlFiles.php').success(function(data){
		$scope.initData = data.htmlFiles;
	console.log($scope.initData);
	});
}]);