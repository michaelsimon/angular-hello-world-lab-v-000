function MainController($scope) {
  $scope.name = 'Michael';
  $scope.email = 'michael.simon@gmail.com';
  $scope.phone = '212-555-5555';
}

angular
  .module('app')
  .controller('MainController', MainController);
