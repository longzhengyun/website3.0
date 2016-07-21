app.factory('searchService', ['$state', 'dataService', function($state, localService) {
	return {
		getLocalData: function() {
			return localService.getObject('localData', '');
		},
		setLocalDate: function(data) {
			localService.setObject('localData', data);
		}
	}
}])