define(['app'], function(app) {
    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/content');
        $stateProvider.state('content', {
            url: '/content',
            views: {
				'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/main.html',
					controller: 'mainController',
					resolve: 'PhoneListCtrl.resolve'
				},
				'user-action@content': {
					templateUrl: 'views/user-action.html',
					controller: 'userActionController'
				}
			}
        })
        .state('login', {
            url: '/login',
            views: {
            	'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/login.html',
					controller: 'loginController'
				}
			}
        })
        .state('detail', {
            url: '/detail/:id',//在id前面加一个冒号，从而制订了一个参数化URL
            views: {
            	'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/detail.html',
					controller: 'detailController'
				},
				'user-action@detail': {
					templateUrl: 'views/user-action.html',
					controller: 'userActionController'
				}
			}
        });
    }])
});