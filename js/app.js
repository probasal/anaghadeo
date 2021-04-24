(function() {
  var app = angular.module("showcaseApp", []);
  var item_block, storeColor, rand;
  app.controller("showcaseController", function($scope, $http) {
    $http.get("data.json?nocache=" + new Date().getTime())
      .success(function(response) {

        $scope.showcase = response;
      });
  });
})();

function applycss() {
}
