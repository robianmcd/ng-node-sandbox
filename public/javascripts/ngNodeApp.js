var ngNodeModule = angular.module('ngNodeSandbox', ['ngRoute']);

ngNodeModule.config([
    '$routeProvider',
    function (routeProvider) {
        routeProvider.when('/home', {
            templateUrl: '/html/views/home.html',
            controller: 'HomeCtrl as ctrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
