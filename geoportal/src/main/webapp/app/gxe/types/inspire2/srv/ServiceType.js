define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "dojo/has",
        "dojo/topic",
        "../base/Descriptor",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/InputSelectOne",
        "esri/dijit/metadata/form/Options",
        "esri/dijit/metadata/form/Option",
        "esri/dijit/metadata/form/iso/GcoElement",
        "dojo/text!./templates/ServiceType.html"],
function(declare, lang, has, topic, Descriptor, Element, InputSelectOne, Options, Option, GcoElement, template) {

  var oThisClass = declare(Descriptor, {

    templateString: template,
    
    postCreate: function() {
      this.inherited(arguments)
      
      console.log('ServiceType', arguments, this._selectOne)
      
      this.own(this._selectOne.on("interaction-occurred", lang.hitch(this, function(event) {
        var serviceType = event.inputWidget.getInputValue()
        topic.publish("inspire/service-type-changed", serviceType)
      })))
    }

  });

  return oThisClass;
});