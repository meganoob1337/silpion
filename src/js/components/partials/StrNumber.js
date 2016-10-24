var React = require('react');
var AppActions = require('../../actions/AppActions');
var RB = require('react-bootstrap');
var str = require('string-validator');


var StrNumber = React.createClass({

  getValidationState: function() {
    var numericTest = str.isNumeric();
    return this.props.data.value ? numericTest(this.props.data.value) ? "success" : "error" : null;
  },
  handleBlur: function(e) {
    AppActions.blurElement(this.props.data.id);
  },
  handleChange: function(e) {
    AppActions.updateElement(this.props.data.id,e.target.value);
  },

  render: function(){
    return this.props.data ? (
        <RB.FormGroup
          controlId={this.props.data.id}
          validationState={this.props.data.validationState}

        >
          <RB.ControlLabel>{this.props.data.label}</RB.ControlLabel>
          <RB.FormControl
            type="text"
            value={this.props.data.value}
            placeholder={this.props.data.placeholder ? this.props.data.placeholder : ""}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />

          <RB.FormControl.Feedback />
        </RB.FormGroup>
    ) : <div></div>;
  }
});


module.exports = StrNumber;
