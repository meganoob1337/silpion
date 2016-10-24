var validator = require('string-validator');
var numericTest = validator.isNumeric();
var isAlpha = validator.isAlpha();
var isStreetName = validator.matches('([a-zA-Z-]*)');
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
    return isAlpha(str) ? "success" : "error" ;
  },
  streetValidation: function(str) {
    return isStreetName(str) ? "success" : "error" ;
  },
  streetNrValidation: function(str) {

  },
  creditcardValidation: function(str) {
    return isCreditCard(str) ?  "success" : "error" ;
  },
  numberValidation: function(str) {
    return numericTest(str) ? "success" : "error" ;
  },
  dateValidation: function(str) {
    return isEmpty(str) ? "error" : "success";
  }
}

module.exports  = validationFunctions;
