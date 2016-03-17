define(['app'], function(app){
	app.controller('AsideController', ['$scope', function($scope){
		$scope.menuData = {
			title: '书籍类型',
			option: ['全部', '计算机', '金融', '哲学', '高端办公'],
			value: ''
		};
		$scope.goto = function(value){
			$scope.menuData.value = value;
			console.log($scope.menuData);
		};
	}]);
});