app.factory('searchService', ['$state', 'localService', function($state, localService) {
	return {
		getLocalData: function() {
			return localService.getObject('searchData', '');
		},
		setLocalDate: function(data) {
			localService.setObject('searchData', data);
		}
	}
}])