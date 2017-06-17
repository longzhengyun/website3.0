app.controller('homeController', ['$scope', '$state', 'dataService', 'localService', function($scope, $state, dataService, localService) {
    //初始化数据
    $scope.initData = {
        itemName:'首页',
        articleData:'',
        siteData:''
    };

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
    $scope.initData.articleData = isEmptyObject(localService.getLocalData('articleData'));

    if(isUpdate($scope.updateTime) || !$scope.initData.articleData.length){
        dataService.getData('article_data').success(function(data){
            $scope.initData.articleData = data.db_data;
            localService.setLocalData('articleData', $scope.initData.articleData); //本地存储文章数据
            localService.setLocalData('updateTime', new Date().getTime()); //本地存储更新时间数据
        });
    };

    //获取网站数据
    $scope.initData.siteData = isEmptyObject(localService.getLocalData('siteData'));
    
    if(isUpdate($scope.updateTime) || !$scope.initData.siteData.length){
        dataService.getData('site_data').success(function(data){
            $scope.initData.siteData = data.db_data;
            localService.setLocalData('siteData', $scope.initData.siteData); //本地存储网站数据
            localService.setLocalData('updateTime', new Date().getTime()); //本地存储更新时间数据
        });
    };

    //点击按钮切换页面
    $scope.goTarget = function(targetKey){
        $state.go(targetKey);
    };

}]);