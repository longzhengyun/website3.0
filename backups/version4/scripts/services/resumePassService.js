app.factory('resumePassService', ['localService', 'dataService', function(localService, dataService) {
	return function() {
		//获取本地用户数据
		var localData = localService.getLocalData('resumeData');
		var now = new Date().getTime();

		//根据本地缓存设置访问状态，validate不为0，并且浏览间隔时间不超过3600000毫秒（1小时）
		var validate = parseInt(dataService.getValidate(localData.code));
		if(validate && (now - localData.date) < 3600000){
			localData.date = now;
			localService.setLocalData('resumeData', localData); //本地存储用户数据

			return true;
		}else{
			localService.setLocalData('resumeData', ''); //清除本地存储用户数据
			return false;
		};
	}
}])