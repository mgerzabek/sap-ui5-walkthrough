sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.wt",
		settings : {
			id : "wt"
		},
		async: true
	}).placeAt("content");
});