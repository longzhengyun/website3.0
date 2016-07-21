app.controller('menuController', ['$scope', '$state', function($scope, $state) {
	//初始化
	$scope.initMenu = {
		items:[
			{itemName:'首页', itemKey:'home', itemIcon:'icon-home', isCurrent:false},
			{itemName:'文章', itemKey:'articleList', itemIcon:'icon-tree', isCurrent:false},
			{itemName:'网站', itemKey:'siteList', itemIcon:'icon-location', isCurrent:false},
			{itemName:'案例', itemKey:'caseList', itemIcon:'icon-books', isCurrent:false}
		]
	};

	//设置菜单当前项高亮
	angular.forEach($scope.initMenu.items, function(value){
		if(value.itemName == $scope.$parent.initData.itemName){
			value.isCurrent = true;
		}
	});

	//点击菜单切换内容
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};

}]);