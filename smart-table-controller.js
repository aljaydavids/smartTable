function SmartTableCtrl($scope, $filter, PeopleFactory) {
  $scope.people = PeopleFactory.getPeople();
  $scope.sortedColumn = 'first_name';
  $scope.reverse = false;

  $scope.sort = function(sortedColumn) {
    $scope.sortedColumn = sortedColumn;
    if($scope.sortedColumn === sortedColumn) {
      $scope.reverse = !$scope.reverse;
    }
  }

  $scope.filterPeople = function(searchedQuery) {
    var firstName = angular.lowercase(searchedQuery.first_name);
    var lastName = angular.lowercase(searchedQuery.last_name);
    var searchedQuery = angular.lowercase($scope.searchedQuery);
    if(firstName.indexOf(searchedQuery || '') !== -1 || lastName.indexOf(searchedQuery || '') !== -1) {
      return true;
    }
  }
}

angular.module('smartTable')
.controller('stCtrl', SmartTableCtrl);
