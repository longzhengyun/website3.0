var app = angular.module('app', ['ngSanitize', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'header@home': {
				templateUrl: 'views/header.html',
				controller: 'headerController'
			},
			'content': {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			}
		}
	})
}])