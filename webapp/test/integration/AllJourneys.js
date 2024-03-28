/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/Brunei/zhousingappsubmission/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/Brunei/zhousingappsubmission/test/integration/pages/Worklist",
	"com/Brunei/zhousingappsubmission/test/integration/pages/Object",
	"com/Brunei/zhousingappsubmission/test/integration/pages/NotFound",
	"com/Brunei/zhousingappsubmission/test/integration/pages/Browser",
	"com/Brunei/zhousingappsubmission/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.Brunei.zhousingappsubmission.view."
	});

	sap.ui.require([
		"com/Brunei/zhousingappsubmission/test/integration/WorklistJourney",
		"com/Brunei/zhousingappsubmission/test/integration/ObjectJourney",
		"com/Brunei/zhousingappsubmission/test/integration/NavigationJourney",
		"com/Brunei/zhousingappsubmission/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});