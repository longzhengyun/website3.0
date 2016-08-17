//定义app
var app = angular.module('app', ['ngSanitize', 'ui.router']);

//常数
app.constant('HTMLFILES_DATA', 'http://www.jary.dev/htmlFiles.php');

//控制器
app.controller('mainController', ['$scope', 'dataService', 'HTMLFILES_DATA', function($scope, dataService, HTMLFILES_DATA) {
	$scope.loadDir = function(){
		if($scope.userDir != undefined && $scope.userDir != ''){
			//获取数据
			dataService.getData(HTMLFILES_DATA, '/' + $scope.userDir + '/').success(function(data){
				$scope.initData = data.htmlFiles;
				console.log(data);
			});
		}else{
			alert('请输入需要加载的文件目录');
		};
	};
}]);

//服务
app.factory('dataService', ['$http', function($http) {
	return {
		//获取数据
		getData: function(dataURL, dataVAR) {
			return $http.get(dataURL + '?id=' + dataVAR);
		}
	}
}]);