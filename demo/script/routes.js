define(['app'], function(app) {
    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/list');
        $stateProvider.state('/', {
            url: '/list',
            views: {
				'aside': {
					templateUrl: 'views/aside.html',
					controller: 'AsideController'
				},
				'main': {
					templateUrl: 'views/main.html',
					controller: 'MainController'
				}
			}
        })
        .state('login', {
            url: '/login',
            views: {
				'login': {
					templateUrl: 'views/login.html',
					controller: 'LoginController'
				}
			}
        })
        .state('add', {
            url: '/add',
            views: {
				'aside': {
					templateUrl: 'views/aside.html',
					controller: 'AsideController'
				},
				'add': {
					templateUrl: 'views/add.html',
					controller: 'AddController'
				}
			}
        })
        .state('detail', {
            url: '/detail',
            views: {
				'detail': {
					templateUrl: 'views/detail.html',
					controller: 'DetailController'
				}
			}
        });
    }])
});