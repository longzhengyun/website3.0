app.factory('dataService', ['$http', 'REQUEST_DATA', function($http, REQUEST_DATA) {
	return {
		//获取数据
		getData: function(dataVAR) {
			return $http.get(REQUEST_DATA + '?id=' + dataVAR);
		},
		//验证权限
		getValidate: function(dataVAR) {
			var xmlHttp, result;
			if(window.ActiveXObject){
				xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
			}else if(window.XMLHttpRequest){
				xmlHttp = new XMLHttpRequest();
			};
			xmlHttp.onreadystatechange = function(){
				if(xmlHttp.readyState == 4){
					if(xmlHttp.status == 200 || xmlHttp.status == 0){
						result = xmlHttp.responseText;
					}
				}
			};
			xmlHttp.open('get', REQUEST_DATA + '?id=admin_data&username=hr&password=' + dataVAR, false);
			xmlHttp.send(null);

			return result;
		}
	}
}])