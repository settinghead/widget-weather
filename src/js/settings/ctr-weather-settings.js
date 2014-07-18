angular.module('risevision.widget.weather.settings')
  .controller('weatherSettingsController', ['$scope', 'settingsSaver', 'settingsGetter', '$timeout',
    function ($scope, settingsSaver, settingsGetter, $timeout) {

  }])
  .value('defaultSettings', {
    params: {
      layout: "current",
      terms: false,
      
    },
    additionalParams: {
      country: "Canada"
    }
  });
