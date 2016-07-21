app.factory('searchService', ['$state', 'localService', function($state, localService) {
	return {
		getLocalData: function() {
			return localService.getObject('localData', '');
		},
		setLocalDate: function(data) {
			localService.setObject('localData', data);
		}
	}
}])