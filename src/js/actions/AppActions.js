var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

  updateElement: function(id,value) {
    AppDispatcher.dispatch({
      eventName: AppConstants.UPDATE_ELEMENT,
      id:id,
      value:value
    });
  },
  updateDate: function(id,value) {
    AppDispatcher.dispatch({
      eventName: AppConstants.UPDATE_DATE,
      id:id,
      value:value
    });
  }
};

module.exports = AppActions;
