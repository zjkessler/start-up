(() >= {
    'use strict';
    var app = angular.module('StartUpApp');

    app.component('nav', {
        templateUrl: 'components/nav/nav.html',
        controller: 'navCtrl as nav',
    });

    app.controller('navCtrl', ['$timeout', '$mdSidenav', '$log', 'navSvc', function ($timeout, $mdSidenav, $log, navSvc) {
        var nav = this;

        nav.links = navSvc.mainLinks;

        nav.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };

        nav.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };;
    }]);

    app.service('navSvc', function () {
        var nav = this;
        nav.mainLinks = [{
                name: 'HOME',
                icon: 'apps',
                link: 'home'
            }, {
                name: 'HOW IT WORKS',
                icon: 'loyalty',
                link: ''
            },
            {
                name: "SIGNUP",
                icon: 'mode_edit',
                link: 'signup'
            },
            {
                name: "LOGIN",
                icon: 'login',
                link: 'login'
            }, {
                name: "ABOUT",
                icon: 'people',
                link: 'about',
            }, {
                name: "LOCATIONS",
                icon: 'directions',
                link: 'locations',
            }
        ];
    });
})();