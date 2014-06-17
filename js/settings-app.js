angular.module('risevision.widget.weather.settings', ['risevision.widget.common', 'pascalprecht.translate'])
  .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'locales/',
      suffix: '/translation.json'
    });
    $translateProvider.determinePreferredLanguage();
  }]);