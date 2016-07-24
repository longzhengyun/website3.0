app.factory('resumeService', ['localService', function(localService) {
	return {
		getLocalData: function() {
			return localService.getObject('resumeData', '');
		},
		setLocalDate: function(data) {
			localService.setObject('resumeData', data);
		}
	}
}])