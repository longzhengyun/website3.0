app.factory('dataService', ['$http', function($http) {
	return {
		//获取数据
		getData: function(dataURL) {
			return $http.get(dataURL);
		}
	}
}])