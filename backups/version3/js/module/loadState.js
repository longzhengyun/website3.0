//模块-加载loading
define('loadState', function(){
	var docBody = document.getElementsByTagName('body')[0];
	var loadLayer = document.createElement('section');
		loadLayer.id = 'loadLayerId';
		loadLayer.className = 'load-layer';
	var loadCon = document.createElement('span');
		loadCon.className = 'load-con';
		loadLayer.appendChild(loadCon);
	var loadState = {
		addLoadState: function(){
			var loadLayerId = document.getElementById('loadLayerId');
			if(!loadLayerId){
				docBody.appendChild(loadLayer);
			};
		},//加载load状态
		delLoadState: function(){
			var loadLayerId = document.getElementById('loadLayerId');
			if(loadLayerId){
				docBody.removeChild(loadLayer);
			};//删除load状态
		}
		
	};
	return loadState;
});