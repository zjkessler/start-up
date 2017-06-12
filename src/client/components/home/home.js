'use strict';
var app = angular.module('StartUpApp');
app.component('home', {
    templateUrl: 'components/home/home.html',
    controller: 'homeCtrl as home'
});
app.controller('homeCtrl', function () {
    var vm = this;

    vm.content = {
        welcome: "Welcome To Lean",
        aboutTitle: 'What is Lean?',
        aboutContent: 'Renting a friend to vent to in a time of need, for any reason at all. Therapy can be very expensive and sometimes people need face to face interaction without paying an arm and a leg or annoying close friends and family. The goal is to connect people who are looking to vent or get something off their chest with non-licensed therapists who can be seen as a friend or simply someone to talk to for a fraction of the price. Target employee demographic would come from the social worker, Human Resource, and Communication pool, specifically those people to make a little extra money while not at their "day job."'
    }

});