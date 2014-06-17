angular.module('risevision.widget.weather.settings')
  .factory('gadgetsApi', ["$window", function ($window) {
    return $window.gadgets;
  }]);