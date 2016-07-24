app.factory('searchService', ['localService', function(localService) {
	return {
		getLocalData: function() {
			return localService.getObject('searchData', '');
		},
		setLocalDate: function(data) {
			localService.setObject('searchData', data);
		}
	}
}])