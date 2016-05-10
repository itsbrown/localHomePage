'use strict'

angular.module('GNCApp', [])
.controller('MainGNC',function($scope) {

    $scope.mainHeader = 'Yo NOW!';
    $scope.lat = 'waiting';
    $scope.long = 'waiting';

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(show_map);
        } else {
        }
    }
    function show_map(position) {
        var lats = position.coords.latitude;
        var longs = position.coords.longitude;
        $scope.$apply(function(position) {
            $scope.lat = lats;
            $scope.long = longs;
        });
        // let's show a map or do something interesting!
    }
    getLocation();
})