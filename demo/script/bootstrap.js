define(['require',
		'angular',
		'app',
		'routes',
		'ngScrollbar',
		'controllers/headerController',
		'controllers/mainController',
		'directives/mainDirective',
		'controllers/userActionController',
		'controllers/loginController',
		'directives/loginDirective',], function (require, angular) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});