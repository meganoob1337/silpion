var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var validation = require('../utils/validation');

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
    'type' : 'name'
  },
  'number' : {
    'label' : 'Hausnummer: ',
    'value' : '',
    'validationState': null,
    'id'    : 'number',
    'placeholder' : '',
    'type' : 'number'
  },
  'date1' : {
    'label' : 'Anreisedatum',
    'value' : '',
    'validationState': null,
    'id'    : 'date1',
    'type' : 'name'
  },
  'date2' : {
    'label' : 'Abreisedatum',
    'value' : '',
    'validationState': null,
    'id'    : 'date2',
    'type' : 'name'
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
      else {
        form[id]['value'] = value;
      }
    }
  },
  _postFormIfValid: function() {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.open("POST", "http://localhost:3000");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(form));
  },
  _validate: function() {
      for(var item in form) {
        var field = form[item];
        field.validationState = field.value ? validation.numberValidation(field.value) : null;
        form[item] = field;
      }

    console.log('validation required');
  },
  _validateElement: function(id) {
    //TODO set type from element
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
