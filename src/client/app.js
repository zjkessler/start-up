var app = angular.module('StartUpApp', ['ui.router', 'ui.bootstrap', 'ngMaterial', 'ngMdIcons', 'ngAnimate'])

app.config(['$stateProvider', '$locationProvider', '$mdThemingProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $mdThemingProvider, $urlRouterProvider) {

    $locationProvider.hashPrefix('')
        .html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        }).state('signup', {
            url: '/signup',
            component: 'signup'
        });

    $mdThemingProvider.theme('default')
        .primaryPalette('yellow')
        .accentPalette('cyan');
}]);