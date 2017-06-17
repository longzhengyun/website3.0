app.controller('siteListController', ['$scope', 'dataService', function($scope, dataService) {
	//初始化
	$scope.initData = {
		itemName:'网站',
	};

	$scope.initHeader = {
		title:'网站收藏'
	};

	$scope.initSubMenu = {
		items:[
			{itemName:'全部', itemKey:'', isCurrent:true},
			{itemName:'技术', itemKey:'技术', isCurrent:false},
			{itemName:'工具', itemKey:'工具', isCurrent:false},
			{itemName:'其他', itemKey:'其他', isCurrent:false}
		],
		tagsKey:'',
		tagsShow:true
	};

	//获取网站数据
	dataService.getData('site_data').success(function(data){
		$scope.siteData = data.db_data;
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