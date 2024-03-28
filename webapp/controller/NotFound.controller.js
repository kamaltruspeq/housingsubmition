sap.ui.define([
		"com/Brunei/zhousingappsubmission/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.Brunei.zhousingappsubmission.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);