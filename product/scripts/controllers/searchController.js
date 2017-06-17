app.controller('searchController', ['$scope', '$window', 'dataService', 'localService', function($scope, $window, dataService, localService) {
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

    //获得文章数据
    $scope.articleData = isEmptyObject(localService.getLocalData('articleData'));
    
    if(isUpdate($scope.updateTime) || !$scope.articleData.length){
        dataService.getData('article_data').success(function(data){
            $scope.articleData = data.db_data;
            localService.setLocalData('articleData', $scope.articleData); //本地存储文章数据
            localService.setLocalData('updateTime', new Date().getTime()); //本地存储更新时间数据
        });
    };

    //初始化搜索数据
    $scope.localData = isEmptyObject(localService.getLocalData('searchData'));
    $scope.searchData = $scope.localData;

    //点击清空搜索内容
    $scope.clearSearch = function(){
        $scope.searchValue = '';
        $scope.searchResult = false;
        $scope.searchData = $scope.localData;
    };

    //点击按钮返回
    $scope.goBack = function(){
        $window.history.back();
    };

    //搜索
    $scope.searchAction = function(){
        if(!$scope.searchValue == ''){//非空则搜索
            $scope.searchResult = true;
            
            $scope.searchData = [];
            angular.forEach($scope.articleData, function(value){
                $scope.searchData.push({'id':value.id, 'title':value.title});
            });

            //判断是否有包含或重复
            function transferAction(array){
                var transfer = [], pushArray = [], pushState = true;
                if(array.length > 0){//非空数组循环
                    angular.forEach(array, function(value, key){
                        //数组子项不被包含则push
                        if($scope.searchValue.indexOf(value) < 0 || value.indexOf($scope.searchValue) >= 0){
                            transfer.push(value);
                        };
                        //数组存储pushState的布尔条件
                        if(value.indexOf($scope.searchValue) < 0){
                            pushArray[key] = true;
                        }else{
                            pushArray[key] = false;
                        };
                    });
                    //判断pushState布尔值
                    angular.forEach(pushArray, function(value){
                        if(value == false){
                            pushState = false;
                        };
                    });
                    //push搜索内容
                    if(pushState){
                        transfer.push($scope.searchValue);
                    };
                }else{//空数组直接push
                    transfer.push($scope.searchValue);
                };
                return transfer;
            };
            
            //处理数组清除重复或包含
            $scope.localData = transferAction($scope.localData);

            localService.setLocalData('searchData', $scope.localData); //本地存储用户数据
        }else{//空值重置为显示历史搜索
            $scope.searchResult = false;
            $scope.searchData = $scope.localData;
        };
    };

    //点击历史搜索
    $scope.searchHistory = function(item){
        $scope.searchResult = true;
        $scope.searchValue = item;
        $scope.searchData = $scope.articleData;
    };

    //点击清空历史搜索
    $scope.clearHistory = function(){
        $scope.searchValue = '';
        $scope.searchData = '';
        $scope.localData = [];
        localService.setLocalData('searchData', $scope.localData); //本地存储用户数据
    };

}]);