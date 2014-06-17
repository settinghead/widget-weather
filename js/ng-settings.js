angular.module('risevision.widget.weather.settings', [])
  .controller('settingsController', ['$scope', function ($scope) {
    $scope.settings = new RiseVision.Common.Settings();

    $scope.getSettings = function () {
    };

  }]);