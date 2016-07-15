app.controller('menuController', ['$scope', '$location', function($scope, $location) {
	//初始化
	$scope.initMenu = {
		items:[
			{itemName:'首页', itemKey:'home', itemIcon:'icon-home', isCurrent:false},
			{itemName:'文章', itemKey:'articleList', itemIcon:'icon-tree', isCurrent:false},
			{itemName:'网站', itemKey:'siteList', itemIcon:'icon-location', isCurrent:false},
			{itemName:'案例', itemKey:'caseList', itemIcon:'icon-books', isCurrent:false}
		]
	};

	//获取当前路由关键字
	$scope.pathKeyword = $location.path().replace(/\//, '');

	//设置菜单当前项高亮
	for (var i = $scope.initMenu.items.length - 1; i >= 0; i--) {
		if($scope.initMenu.items[i].itemKey == $scope.pathKeyword){
			$scope.initMenu.items[i].isCurrent = true;
		};
	};

	//点击菜单切换内容
	$scope.menuAction = function(item){
		$location.path('/' + item.itemKey);//切换内容
	};

}]);