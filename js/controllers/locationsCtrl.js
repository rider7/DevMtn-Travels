angular.module('devmtnTravel')
.controller('locationsCtrl', function($scope, mainSrv){
$scope.theData = mainSrv.travelInfo();

});
