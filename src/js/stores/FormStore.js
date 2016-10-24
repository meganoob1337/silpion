var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var validation = require('../utils/validation');
var submitAllowed = false;
var CHANGE_EVENT = 'change';
var form = {
  'lname' : {
    'label' : 'Name: ',
    'value' : '',
    'validationState': null,
    'id'    : 'lname',
    'placeholder' : 'Bitte Namen eingeben',
    'type' : 'name'
  },
  'fname' : {
    'label' : 'Vorname: ',
    'value' : '',
    'validationState': null,
    'id'    : 'fname',
    'placeholder' : 'Bitte Vornamen eingeben',
    'type' : 'name'
  },
  'street' : {
    'label' : 'Straße: ',
    'value' : '',
    'validationState': null,
    'id'    : 'street',
    'placeholder' : 'Bitte Straße eingeben',
    'type' : 'streetName'
  },
  'number' : {
    'label' : 'Hausnummer: ',
    'value' : '',
    'validationState': null,
    'id'    : 'number',
    'placeholder' : 'Bitte Hausnummer eingeben',
    'type' : 'streetNumber'
  },
  'plz' : {
    'label' : 'PLZ: ',
    'value' : '',
    'validationState': null,
    'id'    : 'plz',
    'placeholder' : 'Bitte PLZ eingeben',
    'type' : 'number'
  },
  'city' : {
    'label' : 'Stadt: ',
    'value' : '',
    'validationState': null,
    'id'    : 'city',
    'placeholder' : 'Bitte Stadt eingeben',
    'type' : 'name'
  },
  'creditcard' : {
    'label' : 'Kreditkarten Nummer: ',
    'value' : '',
    'validationState': null,
    'id'    : 'creditcard',
    'placeholder' : 'Bitte geben sie ihre Kreditkarten Nummer ein',
    'type' : 'creditcard'
  },
  'date1' : {
    'label' : 'Anreisedatum',
    'value' : '',
    'validationState': null,
    'id'    : 'date1',
    'type' : 'date'
  },
  'date2' : {
    'label' : 'Abreisedatum',
    'value' : '',
    'validationState': null,
    'id'    : 'date2',
    'type' : 'date'
  }

};
var FormStore = assign({}, EventEmitter.prototype, {

	_emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
   * @param {function} callback
   */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

  /**
   * @param {function} callback
   */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

  getForm: function() {

    return form;
  },

  _updateField(id,value) {
    form[id]['value'] = value;
  },
  _updateDate(id,value) {
    var today = new Date();
    var valueDate = new Date(value);
    console.log(id,value);
    if(id == 'date1') {
      if(today > valueDate){
        form[id]['value'] = today.toISOString();
      }
      else {
        form[id]['value'] = value;
      }
    }
    if(id == 'date2') {
      if((today > valueDate) && !(valueDate > new Date(form['date1']['value']))){
        form[id]['value'] = today.toISOString();
      }
      else if (!(today > valueDate) && !(valueDate > new Date(form['date1']['value']))) {
        form[id]['value'] = new Date(form['date1']['value']).toISOString();
      }
      else {
        form[id]['value'] = value;
      }
    }
  },

  _postFormIfValid: function() {
    if(submitAllowed) {
      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
      xmlhttp.open("POST", "http://localhost:3000");
      xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xmlhttp.send(JSON.stringify(form));
    }
    console.log(document);
  },
  _validate: function() {
      var res = true;
      for(var item in form) {
        var field = form[item];
        FormStore._setValidationState(field.id,field.value ? validation.getValidationFunction(field.type)(field.value) : "error") ;
        if(field.validationState != "success") {
          res = false;
        }
      }
    submitAllowed = res;
    console.log('validation required',res);
  },
  _validateElement: function(id) {
    var field = form[id];

    FormStore._setValidationState(id,field.value ? validation.getValidationFunction(field.type)(field.value) : null) ;
    console.log(field);
  },
  _setValidationState: function(id,state) {
    console.log(id,state);
    form[id].validationState = state;
  }



});

AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case AppConstants.UPDATE_ELEMENT:
          FormStore._updateField(payload.id,payload.value);
          FormStore._emitChange();
          break;
        case AppConstants.BLUR_ELEMENT:
          FormStore._validateElement(payload.id);
          FormStore._emitChange();
          break;
        case AppConstants.UPDATE_DATE:
          FormStore._updateDate(payload.id,payload.value);
          FormStore._emitChange();
          break;
        case AppConstants.SUBMIT_CLICKED:
          FormStore._validate();
          FormStore._postFormIfValid();
          FormStore._emitChange();
          break;

			FormStore._emitChange();

            break;

    }

    return true; // Needed for Flux promise resolution

});
module.exports = FormStore;
