var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var form = {
  'lname' : {
    'label' : 'Name: ',
    'value' : '',
    'id'    : 'lname',
    'placeholder' : 'Bitte Namen eingeben'
  },
  'fname' : {
    'label' : 'Vorname: ',
    'value' : '',
    'id'    : 'fname',
    'placeholder' : 'Bitte Vornamen eingeben'
  },
  'street' : {
    'label' : 'Straße: ',
    'value' : '',
    'id'    : 'street',
    'placeholder' : 'Bitte Straße eingeben'
  },
  'number' : {
    'label' : 'Hausnummer: ',
    'value' : '',
    'id'    : 'number',
    'placeholder' : ''
  },
  'date1' : {
    'label' : 'Anreisedatum',
    'value' : '',
    'id'    : 'date1'
  },
  'date2' : {
    'label' : 'Abreisedatum',
    'value' : '',
    'id'    : 'date2'
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
    console.log(JSON.stringify(form));

    return form;
  },

  _updateField(id,value) {
    console.log(id,value);
    form[id]['value'] = value;
  }



});

AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case AppConstants.UPDATE_ELEMENT:
          FormStore._updateField(payload.id,payload.value);
          FormStore._emitChange();
          break;

			FormStore._emitChange();

            break;

    }

    return true; // Needed for Flux promise resolution

});
module.exports = FormStore;
