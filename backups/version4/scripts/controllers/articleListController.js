app.controller('articleListController', ['$scope', 'dataService', function($scope, dataService) {
	//初始化
	$scope.initData = {
		itemName:'文章',
	};

	$scope.initHeader = {
		title:'前端文章',
		btnSearch:true
	};

	$scope.initSubMenu = {
		items:[
			{itemName:'全部', itemKey:'', isCurrent:true},
			{itemName:'HTML', itemKey:'HTML', isCurrent:false},
			{itemName:'CSS', itemKey:'CSS', isCurrent:false},
			{itemName:'JavaScript', itemKey:'JavaScript', isCurrent:false},
			{itemName:'杂谈', itemKey:'杂谈', isCurrent:false}
		],
		tagsKey:'',
		tagsShow:true
	};

	//获取文章数据
	dataService.getData('article_data').success(function(data){
		$scope.articleData = data.db_data;
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