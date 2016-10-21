var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

  updateElement: function(id,target) {
    console.log(id,target);
    AppDispatcher.dispatch({
      eventName: AppConstants.UPDATE_ELEMENT,
      id:id,
      target:target
    });
  }
};

module.exports = AppActions;
