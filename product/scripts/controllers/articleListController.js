app.controller('articleListController', ['$scope', 'dataService', 'localService', function($scope, dataService, localService) {
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

    //获取文章数据
    var regexp = /\"\/content\/uploadfile\//g;//正则表达式匹配图片

    $scope.articleData = isEmptyObject(localService.getLocalData('articleData'));
    
    if(!isUpdate($scope.updateTime) && $scope.articleData.length){
        angular.forEach($scope.articleData, function(value){
            value.date = value.date * 1000;//秒转毫秒
            value.description = value.description.replace(regexp, '"/static/content/uploadfile/');//正则匹配替换文章图片路径
        });
    }else{
        dataService.getData('article_data').success(function(data){
            $scope.articleData = data.db_data;
            localService.setLocalData('articleData', $scope.articleData); //本地存储文章数据
            localService.setLocalData('updateTime', new Date().getTime()); //本地存储更新时间数据
            angular.forEach($scope.articleData, function(value){
                value.date = value.date * 1000;//秒转毫秒
                value.description = value.description.replace(regexp, '"/static/content/uploadfile/');//正则匹配替换文章图片路径
            });
        });
    };

    //初始化
    $scope.initData = {
        itemName:'文章',
    };

    $scope.initHeader = {
        title:'前端文章',
        btnSearch:true
    };

    $scope.initSubMenu = {
        items:[
            {itemName:'全部', itemKey:'', isCurrent:true},
            {itemName:'HTML', itemKey:'HTML', isCurrent:false},
            {itemName:'CSS', itemKey:'CSS', isCurrent:false},
            {itemName:'JavaScript', itemKey:'JavaScript', isCurrent:false},
            {itemName:'杂谈', itemKey:'杂谈', isCurrent:false}
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