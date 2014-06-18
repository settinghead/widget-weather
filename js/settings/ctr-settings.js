angular.module('risevision.widget.weather.settings')
  .controller('settingsController', ['$scope', 'settingsSaver', 'settingsGetter',
    function ($scope, settingsSaver, settingsGetter) {

    $scope.settings = { params: {up_layout: 'current'}, additionalParams: {}};
    $scope.alerts = [];

    $scope.getAdditionalParams = function (name, defaultVal) {
      var val = $scope.settings.additionalParams[name];
      if(angular.isUndefined(val)) {
        return defaultVal;
      }
      else {
        return val;
      }
    };

    $scope.saveSettings = function () {
      //clear out previous alerts, if any
      $scope.alerts = [];

      settingsSaver.saveSettings($scope.settings).then(function () {
        //TODO: perhaps show some indicator in UI?
      }, function (err) {
        $scope.alerts = err.alerts;
      });
    };

    settingsGetter.getAdditionalParams().then(function (additionalParams) {
      $scope.settings.additionalParams = additionalParams;
    });

  }])

  .directive('scrollOnAlerts', function() {
    return {
      restrict: 'A', //restricts to attributes
      scope: false,
      link: function($scope, $elm) {
        $scope.$watchCollection('alerts', function (newAlerts, oldAlerts) {
          if(newAlerts.length > 0 && oldAlerts.length === 0) {
            $('body').animate({scrollTop: $elm.offset().top}, 'fast');
          }
        });
      }
    };
});
