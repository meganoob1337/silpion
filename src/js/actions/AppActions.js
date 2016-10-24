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
  blurElement: function(id) {
    AppDispatcher.dispatch({
      eventName: AppConstants.BLUR_ELEMENT,
      id:id
    })
  },
  updateDate: function(id,value) {
    AppDispatcher.dispatch({
      eventName: AppConstants.UPDATE_DATE,
      id:id,
      value:value
    });
  },
  SubmitButtonClicked: function() {
    AppDispatcher.dispatch({
      eventName: AppConstants.SUBMIT_CLICKED
    });
  }
};

module.exports = AppActions;
