app.controller('caseListController', ['$scope', 'dataService', 'CASE_DATA', function($scope, dataService, CASE_DATA) {
	//初始化
	$scope.initData = {
		itemName:'案例',
	};

	$scope.initHeader = {
		title:'个人案例',
		btnOwner:true
	};

	$scope.initSubMenu = {
		items:[
			{itemName:'全部', itemKey:'', isCurrent:true},
			{itemName:'Mobile', itemKey:'Mobile', isCurrent:false},
			{itemName:'PC', itemKey:'PC', isCurrent:false},
			{itemName:'其他', itemKey:'其他', isCurrent:false}
		],
		tagsKey:'',
		tagsShow:true
	};

	//获取案例数据
	dataService.getData(CASE_DATA).success(function(data){
		$scope.caseData = data;
	});

	//点击菜单切换内容
	$scope.subMenuAction = function(item){
		angular.forEach($scope.initSubMenu.items ,function(value){
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