var app = angular.module('app', ['ngSanitize', 'ui.router', 'oc.lazyLoad']);

app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	$urlRouterProvider.otherwise('/main');
	$stateProvider.state('main', {
			url: '/main',
			views: {
				'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/main.html',
					controller: 'mainController'
				},
				'user-action@main': {
					templateUrl: 'views/user-action.html',
					controller: 'userActionController'
				}
			}
			// resolve: {
			// 	loadOcModal: ['$ocLazyLoad', function($ocLazyLoad) {
			// 		return $ocLazyLoad.load([
			// 			'scripts/directives/mainDirective.js',
			// 			'styles/ng-scrollbar.min.css',
			// 			'scripts/library/scrollbar/ng-scrollbar.min.js'
			// 		]).then(function() {
			// 			console.log('load');
			// 		})
			// 	}]
			// }
		})
		.state('list', {
			url: '/list',
			views: {
				'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/list.html',
					controller: 'listController'
				},
				'user-action@list': {
					templateUrl: 'views/user-action.html',
					controller: 'userActionController'
				}
			}
		})
		.state('detail', {
			url: '/detail/:id', //在id前面加一个冒号，从而制订了一个参数化URL
			views: {
				'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/detail.html',
					controller: 'detailController'
				}
			}
		})
		.state('user', {
			url: '/user',
			views: {
				'header': {
					templateUrl: 'views/header.html',
					controller: 'headerController'
				},
				'content': {
					templateUrl: 'views/user.html',
					controller: 'userController'
				}
			}
		});
}])