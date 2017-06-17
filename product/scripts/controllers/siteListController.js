app.controller('siteListController', ['$scope', 'dataService', 'localService', function($scope, dataService, localService) {
	//空对象转空数组
	function isEmptyObject(OBJ){
		if(typeof OBJ === 'object' && !(OBJ instanceof Array)){
			var hasProp = false;
			for(var prop in OBJ){
				hasProp = true;
				break;
			};
			if(!hasProp){
				return [];
			};
		}else{
			return OBJ;
		};
	};

	//判断数据是否过期
    function isUpdate(time) {
        var now = new Date().getTime();
        if(time && (now - time) < 3600000){
            return false;
        }else{
            return true;
        };
    };
    
    $scope.updateTime = localService.getLocalData('updateTime');

	//获取网站数据
	$scope.siteData = isEmptyObject(localService.getLocalData('siteData'));
	
	if(isUpdate($scope.updateTime) || !$scope.siteData.length){
		dataService.getData('site_data').success(function(data){
			$scope.siteData = data.db_data;
			localService.setLocalData('siteData', $scope.siteData); //本地存储网站数据
            localService.setLocalData('updateTime', new Date().getTime()); //本地存储更新时间数据
		});
	};

	//初始化
	$scope.initData = {
		itemName:'网站',
	};

	$scope.initHeader = {
		title:'网站收藏'
	};

	$scope.initSubMenu = {
		items:[
			{itemName:'全部', itemKey:'', isCurrent:true},
			{itemName:'技术', itemKey:'技术', isCurrent:false},
			{itemName:'工具', itemKey:'工具', isCurrent:false},
			{itemName:'其他', itemKey:'其他', isCurrent:false}
		],
		tagsKey:'',
		tagsShow:true
	};

	//点击菜单切换内容
	$scope.subMenuAction = function(item){
		angular.forEach($scope.initSubMenu.items, function(value){
			if(value.itemName == item.itemName){
				value.isCurrent = true;
				$scope.initSubMenu.tagsKey = value.itemKey;
				if($scope.initSubMenu.tagsKey == ''){
					$scope.initSubMenu.tagsShow = true;
				}else{
					$scope.initSubMenu.tagsShow = false;
				};
			}else{
				value.isCurrent = false;
			}
		});
	};

}]);