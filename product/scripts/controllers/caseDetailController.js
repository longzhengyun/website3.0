app.controller('caseDetailController', ['$scope', '$location', 'dataService', function($scope, $location, dataService) {
	//初始化
	$scope.initHeader = {
		title:'案例详情',
		btnBack:true,
		btnHome:true
	};

	var detailPath = $location.path();
	var id = detailPath.substr(detailPath.lastIndexOf('/') + 1);

	//获取案例数据
	dataService.getData('case_data').success(function(data){
		$scope.caseData = data.db_data;
		angular.forEach($scope.caseData, function(value){
			if(value.id == id){
				$scope.detailData = value;
				$scope.detailData.pages = angular.fromJson(value.pages);
			}
		});
	});
}]);