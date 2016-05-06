require.config({
	paths:{
		'domReady': 'library/require/domReady',
		'jquery': 'library/jquery/jquery.min',
		'bootstrap': 'library/bootstrap/bootstrap.min',
		'angular': 'library/angular/angular.min',
		'uiRouter': 'library/angular/angular-ui-router'
	},
	shim:{
		'bootstrap':{
			deps: ['jquery']
		},
		'uiRouter':{
			deps: ['angular']
		}
	},
	deps: [
        './bootstrap'
    ]
});