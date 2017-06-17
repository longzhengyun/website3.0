app.controller('articleDetailController', ['$scope', '$location', 'dataService', 'localService', function($scope, $location, dataService, localService) {
    //初始化
    $scope.initHeader = {
        title:'文章详情',
        btnBack:true,
        btnHome:true
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
    var detailPath = $location.path();
    var id = detailPath.substr(detailPath.lastIndexOf('/') + 1);
    var regexp = /\"\/content\/uploadfile\//g;//正则表达式匹配图片
    
    $scope.articleData = isEmptyObject(localService.getLocalData('articleData'));

    if(!isUpdate($scope.updateTime) && $scope.articleData.length){
        angular.forEach($scope.articleData, function(value){
            if(value.id == id){
                $scope.detailData = value;
                $scope.detailData.date = $scope.detailData.date * 1000;//秒转毫秒
                $scope.detailData.content = $scope.detailData.content.replace(regexp, '"/static/content/uploadfile/');//正则匹配替换文章图片路径
            }
        });
    }else{
        dataService.getData('article_data').success(function(data){
            $scope.articleData = data.db_data;
            localService.setLocalData('articleData', $scope.articleData); //本地存储文章数据
            localService.setLocalData('updateTime', new Date().getTime()); //本地存储更新时间数据
            angular.forEach($scope.articleData, function(value){
                if(value.id == id){
                    $scope.detailData = value;
                    $scope.detailData.date = $scope.detailData.date * 1000;//秒转毫秒
                    $scope.detailData.content = $scope.detailData.content.replace(regexp, '"/static/content/uploadfile/');//正则匹配替换文章图片路径
                }
            });
        });
    }
}]);