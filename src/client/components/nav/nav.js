var app = angular.module('StartUpApp');

app.component('nav', {
    templateUrl: 'components/nav/nav.html',
    controller: 'navCtrl as nav'
});

app.controller('navCtrl', ['$timeout', '$mdSidenav', function ($timeout, $mdSidenav) {
    var nav = this;


    nav.links = [{
            name: "home",
            icon: ""
        },
        {
            name: "signup",
            icon: ''
        }
    ];
}]);