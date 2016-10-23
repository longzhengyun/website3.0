app.controller('resumeController', ['$scope', '$state', 'dataService', 'resumePassService', function($scope, $state, dataService, resumePassService) {
	//优先判断是否有访问资格
	if(!resumePassService()){
		$state.go('validatePass');
	};

	//初始化
	$scope.initHeader = {
		title:'个人简历',
		btnBack:true,
		btnHome:true
	};

	//获取个人数据
	dataService.getData('user_data').success(function(data){
		$scope.resumeData = data.db_data[0];

		var year = new Date().getFullYear();
        var month = (new Date().getMonth() + 1) > 9 ?  '' + (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1);
        var day = new Date().getDate() > 9 ? '' + new Date().getDate() : '0' + new Date().getDate();
        var age = (year + month + day - $scope.resumeData.birthday.replace(/-/g,'')).toString().substr(0, 2);
        var worklife = year - $scope.resumeData.worklife.toString().substr(0, 4);

        //格式化年龄
		$scope.resumeData.age = age;

		//格式化工作年限
		$scope.resumeData.worklife = worklife;
	});

	//点击按钮切换页面
	$scope.goTarget = function(targetKey){
		$state.go(targetKey);
	};
}]);