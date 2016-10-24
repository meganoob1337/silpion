var validator = require('string-validator');
var numericTest = validator.isNumeric();
var isCreditCard = validator.isCreditCard();
var isEmpty = function(str) {if(str.length > 0){return false;} else {return true;}}
var validationFunctions = {

  getValidationFunction: function(type) {
    switch(type) {
      case 'name' : return this.nameValidation;
      case 'number' : return this.numberValidation;
      case 'streetName' : return this.streetValidation;
      case 'streetNumber' : return this.streetNrValidation;
      case 'date' : return this.dateValidation;
      case 'creditcard' : return this.creditcardValidation;
      default : return this.nameValidation;
    }
  },
  nameValidation: function(str) {
    return /^[\u00F0-\u02AFa-zA-Z]+[\ -\u00F0-\u02AFa-zA-Z]*[\u00F0-\u02AFa-zA-Z]+$/.test(str) ? "success" : "error" ;
  },
  streetValidation: function(str) {
    return /^[\u00F0-\u02AFa-zA-Z]+[\ -\u00F0-\u02AFa-zA-Z]*[\u00F0-\u02AFa-zA-Z]+$/.test(str) ? "success" : "error" ;
  },
  streetNrValidation: function(str) {
    return /^\d*[a-zA-Z]?$/.test(str) ? "success" : "error" ;
  },
  creditcardValidation: function(str) {
    return isCreditCard(str) ?  "success" : "error" ;
  },
  numberValidation: function(str) {
    return numericTest(str) ? str.length == 5 ? "success" : "error" : "error" ;
  },
  dateValidation: function(str) {
    return isEmpty(str) ? "error" : "success";
  }
}

module.exports  = validationFunctions;
