angular.module('risevision.widget.weather.settings')
  .service('settingsSaver', ['$q', 'gadgetsApi', function ($q, gadgetsApi) {
    var self = this; 

    this.paramsToString = function(params) {
      //TODO
    };

    this.additionalParamsToString = function (additionalParams) {
      //TODO
    };

    this.validateSettings = function(settings) {
      //TODO
    };

    this.saveSettings = function (settings) {
      var deferred = $q.defer();

      var alerts = self.validateSettings(settings);

      if(alerts.length > 0) {
        deferred.reject({alerts: alerts});
      }

      var str = self.paramsToString(settings.params);
      var additionalParamsStr =
        self.additionalParamsToString(settings.additionalParams);

      gadgetsApi.rpc.call('', 'rscmd_saveSettings', null, {
        params: str,
        additionalParams: additionalParamsStr
      });

      deferred.resolve();

      return deferred.promise;
    };

  }])

  .service('settingsGetter', ['$q', 'gadgetsApi', '$log', function ($q, gadgetsApi, $log) {
    this.getAdditionalParams = function () {
      var deferred = $q.defer();

      gadgetsApi.rpc.call('', 'rscmd_getAdditionalParams', function (result) {
        if(result) {
          result = JSON.parse(result);
        }
        $log.debug('getAdditionalParams returns ', result);
        deferred.resolve(result);
      });

      return deferred.promise;
    }
  }]);