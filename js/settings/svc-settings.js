angular.module('risevision.widget.weather.settings')
  .service('settingsSaver', ['$q', 'gadgetsApi', function ($q, gadgetsApi) {
    var self = this;

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

  .service('settingsGetter', ['$q', 'gadgetsApi', '$log', 'settingsParser', function ($q, gadgetsApi, $log, settingsParser) {
    this.getAdditionalParams = function () {
      var deferred = $q.defer();

      gadgetsApi.rpc.call('', 'rscmd_getAdditionalParams', function (result) {
        if(result) {
          result = settingsParser.parseAdditionalParams(result);
        }
        else {
          result = {};
        }
        $log.debug('getAdditionalParams returns ', result);
        deferred.resolve(result);
      });

      return deferred.promise;
    };
  }])

  .service('settingsParser', [function () {
    this.parseAdditionalParams = function (additionalParamsStr) {
      if(additionalParamsStr) {
        return JSON.parse(additionalParamsStr);
      }
      else {
        return {};
      }
    };

    this.encodeAdditionalParams = function (additionalParams) {
      return JSON.stringify(additionalParams);
    };

    this.parseParams = function (paramsStr) {
      //TODO
    };

    this.encodeParams = function (parmas) {
      //TODO
    };

  }]);
