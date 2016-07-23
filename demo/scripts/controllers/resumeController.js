app.controller('resumeController', ['$scope', function($scope) {
	//初始化
	$scope.initHeader = {
		title:'个人简历',
		btnBack:true,
		btnHome:true
	};

	// $scope.inviteCode = '123465';
	$scope.validatePass = false;

	$scope.visitAction = function(){
		console.log($scope.inviteCode);
		if($scope.inviteCode == '123456'){
			$scope.validatePass = true;
		}else{
			$scope.validatePass = false;
		};
	};
}]);