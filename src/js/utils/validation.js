var validator = require('string-validator');
var numericTest = validator.isNumeric();
var isAlpha = validator.isAlpha();
var validationFunctions = {

  getValidationFunction: function(type) {
    switch(type) {
      case 'name' : return this.nameValidation;
      case 'number' : return this.numberValidation;
    }
  },
  nameValidation: function(str) {
    return isAlpha(str) ? "success" : "error" ;
  },
  streetValidation: function(str) {

  },
  streetNrValidation: function(str) {

  },
  creditcardValidation: function(str) {

  },
  numberValidation: function(str) {
    return numericTest(str) ? "success" : "error" ;
  }
}

module.exports  = validationFunctions;
