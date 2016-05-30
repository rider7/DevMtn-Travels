angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $state){
  var serviceData = mainSrv.travelInfo();;
  console.log(mainSrv.myData)
  console.log(serviceData)
for(var i = 0; i < serviceData.length; i++){
  if( serviceData[i].id == $state.params.id)
  $scope.bookedTrip = serviceData[i];
}
});
