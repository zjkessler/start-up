(function () {
    // body

    var app = angular.module('StartUpApp');

    app.component('signup', {
        templateUrl: 'components/signup/signup.html',
        controller: 'signupCtrl as vm'
    });
    app.controller('signupCtrl', [() => {
        'use strict';
        const vm = this;


    }]);

}());