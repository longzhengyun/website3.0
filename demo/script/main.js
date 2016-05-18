require.config({
	paths:{
		'domReady': 'library/require/domReady',
		'jquery': 'library/jquery/jquery.min',
		'bootstrapJS': 'library/bootstrap/bootstrap.min',
		'angular': 'library/angular/angular.min',
		'uiRouter': 'library/angular/angular-ui-router',
		'ngScrollbar': 'library/scrollbar/ng-scrollbar.min'
	},
	shim:{
		'bootstrapJS':{
			deps: ['jquery']
		},
		"angular":{
			exports: 'angular'
		},
		'uiRouter':{
			deps: ['angular']
		},
		'ngScrollbar':{
			deps: ['angular']
		}
	},
	deps: [
        './bootstrap'
    ]
});