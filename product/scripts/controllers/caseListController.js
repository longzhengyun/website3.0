app.controller('caseListController', ['$scope', '$state', 'dataService', 'resumePassService', function($scope, $state, dataService, resumePassService) {
	//优先判断是否有访问资格
	if(!resumePassService()){
		$state.go('validatePass');
	};

	//初始化
	$scope.initHeader = {
		title:'个人案例',
		btnBack:true,
		btnHome:true
	};

	$scope.initSubMenu = {
		items:[
			{itemName:'全部', itemKey:'', isCurrent:true},
			{itemName:'Mobile', itemKey:'Mobile', isCurrent:false},
			{itemName:'PC', itemKey:'PC', isCurrent:false}
		],
		tagsKey:'',
		tagsShow:true
	};

	//获取案例数据
	dataService.getData('case_data').success(function(data){
		$scope.caseData = data.db_data;
	});
	
	//点击菜单切换内容
	$scope.subMenuAction = function(item){
		angular.forEach($scope.initSubMenu.items, function(value){
			if(value.itemName == item.itemName){
				value.isCurrent = true;
				$scope.initSubMenu.tagsKey = value.itemKey;
				if($scope.initSubMenu.tagsKey == ''){
					$scope.initSubMenu.tagsShow = true;
				}else{
					$scope.initSubMenu.tagsShow = false;
				};
			}else{
				value.isCurrent = false;
			}
		});
	};
}]);