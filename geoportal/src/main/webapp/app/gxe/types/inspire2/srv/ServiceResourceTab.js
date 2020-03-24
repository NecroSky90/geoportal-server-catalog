define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "../base/Descriptor",
        "esri/dijit/metadata/form/Tabs",
        "esri/dijit/metadata/types/iso/srv/ContainsOperations",
        "esri/dijit/metadata/types/iso/srv/CouplingType",
        "./OperatesOn",
        "esri/dijit/metadata/types/iso/srv/ServiceExtent",
        "./ServiceType",
        "dojo/text!./templates/ServiceResourceTab.html"],
function(declare, lang, has, Descriptor, Tabs, ContainsOperations, CouplingType, OperatesOn, ServiceExtent, ServiceType, template) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  return oThisClass;
});