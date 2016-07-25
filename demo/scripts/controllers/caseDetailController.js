app.controller('caseDetailController', ['$scope', '$location', 'dataService', 'CASE_DATA', function($scope, $location, dataService, CASE_DATA) {
	//初始化
	$scope.initHeader = {
		title:'案例详情',
		btnBack:true,
		btnHome:true
	};

	var detailPath = $location.path();
	var id = detailPath.substr(detailPath.lastIndexOf('/') + 1);

	//获取文章数据
	dataService.getData(CASE_DATA).success(function(data){
		$scope.caseData = data;
		angular.forEach($scope.caseData, function(value){
			if(value.id == id){
				$scope.detailData = value;
			}
		});
	});

}]);