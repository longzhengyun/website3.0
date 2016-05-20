var app = angular.module('app', ['ngSanitize', 'ui.router', 'oc.lazyLoad']);

app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
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
					controller: 'mainController'
				},
				'user-action@content': {
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
			url: '/detail/:id', //在id前面加一个冒号，从而制订了一个参数化URL
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