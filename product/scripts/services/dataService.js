app.factory('dataService', ['$http', 'REQUEST_DATA', function($http, REQUEST_DATA) {
	return {
		//获取数据
		getData: function(dataVAR) {
			return $http.get(REQUEST_DATA + '?id=' + dataVAR);
		}
	}
}])