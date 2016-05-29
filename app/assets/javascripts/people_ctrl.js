(function() {
  'use strict';
  angular.module('app').controller('peopleCtrl', function($scope, $http) {

    $scope.setup = function() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.toggleBio = function(person) {
                         person.bioVisible = !person.bioVisible;
                       };

    $scope.addPerson = function(newName, newBio) {
      if (newName && newBio) {
        $scope.peopleList.push({ name: newName, 
                                 bio: newBio, 
                                 bioVisible: true });
        $scope.newName = '';
        $scope.newBio = '';
      };
    };

    $scope.deletePerson = function(index) {
                            $scope.peopleList.splice(index, 1);
                          };

    window.$scope = $scope;
  });
})();