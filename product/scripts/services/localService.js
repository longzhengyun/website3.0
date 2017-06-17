app.factory('localService', ['$window', function($window) {
    return {
        //存储对象，以JSON格式存储
        setLocalData: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        //读取对象
        getLocalData: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}])