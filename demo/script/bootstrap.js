define(['require', 'angular', 'app', 'routes', 'controllers/asideController', 'controllers/mainController', 'controllers/detailController'], function (require, angular) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });
});