//定义app
var app = angular.module('app', ['ngSanitize', 'ui.router']);

//常数
app.constant('PROJECT_URL', 'http://10.3.8.87:8080/showProject');
app.constant('BRANCH_URL', 'http://10.3.8.87:8080/showBranches');
app.constant('HTMLFILES_DATA', 'htmlFiles.php');

//控制器
app.controller('mainController', ['$scope', '$location', 'dataService', function($scope, $location, dataService) {
	//获取项目数据
	dataService.getProject().success(function(data){
		$scope.userProjects = data;
		console.log($scope.userProjects);
	});

	//获取分支数据
	// dataService.getBranch(BRANCH_URL).success(function(data){
	// 	$scope.userBranchs = data;
	// });

	//点击加载数据
	$scope.loadDir = function(){
		if($scope.userDir != undefined && $scope.userDir != ''){
			//获取HTML数据
			dataService.getData('/' + $scope.userDir + '/').success(function(data){
				$scope.htmlDatas = data.htmlFiles;
			});

			//获取当前URL
			$scope.htmlURL = $location.protocol() + '://' + $location.host() + '/' + $scope.userDir;
		}else{
			alert('请输入需要加载的文件目录');
		};
	};
	//键盘事件-回车提交
	$scope.myKeyup = function(e){
		var keycode = window.event ? e.keyCode : e.which;
		if(keycode == 13){
			$scope.loadDir();
		};
	};
}]);

//服务
app.factory('dataService', ['$http', 'PROJECT_URL', 'BRANCH_URL', 'HTMLFILES_DATA', function($http, PROJECT_URL, BRANCH_URL, HTMLFILES_DATA) {
	return {
		//获取数据
		getProject: function() {
			return $http.get(PROJECT_URL);
		},
		getBranch: function(alias) {
			return $http.get(BRANCH_URL + '?remote=' + alias);
		},
		getData: function(dataVAR) {
			return $http.get(HTMLFILES_DATA + '?id=' + dataVAR);
		}
	}
}]);