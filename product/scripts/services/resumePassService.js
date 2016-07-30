app.factory('resumePassService', ['localService', function(localService) {
	return function() {
		//获取本地用户数据
		var localData = localService.getLocalData('resumeData');

		var today = new Date().getTime();

		//根据本地缓存设置访问状态，pass = true，并且浏览间隔时间不超过3600000毫秒（1小时）
		if(localData.pass == 'true' && (today - localData.date) < 3600000){
			localData.date = today;
			localService.setLocalData('resumeData', localData); //本地存储用户数据

			return true;
		}else{
			return false;
		};
	}
}])