(function() {

  "use strict";

  /* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

  var chai = require("chai");
  var chaiAsPromised = require("chai-as-promised");

  chai.use(chaiAsPromised);
  var expect = chai.expect;
  browser.driver.manage().window().setSize(1024, 768);

  describe("Weather Settings UI", function() {
    beforeEach(function (){
      browser.get("/src/settings-e2e.html");
    });

    it("Should correctly load default settings", function () {
      expect(element(by.id("terms")).getAttribute("checked")).
        to.eventually.not.be.true;
      expect(element(by.css("input[name=layout]:checked")).getAttribute("value")).
        to.eventually.equal("current");
    });

    xit("Should correctly save settings", function (done) {
      //TODO
    });
  });
})();
