var DatePicker = require("react-bootstrap-date-picker");
var React = require('react');
var RB = require('react-bootstrap');
var AppActions = require('../../actions/AppActions');
var Datum = React.createClass({

  componentWillMount: function() {
    this.value = new Date().toISOString();
  },
  handleChange: function(value) {
    AppActions.updateDate(this.props.data.id,value);
  },
  handleBlur: function() {
    AppActions.blurElement(this.props.data.id);
  },

  render: function() {
    return this.props.data ? (
      <RB.FormGroup
      className={this.props.data.id + " date"}
      validationState={this.props.data.validationState}
      >
      <RB.ControlLabel>{this.props.data.label}</RB.ControlLabel>
      <DatePicker  value={this.props.data.value} onChange={this.handleChange} onBlur={this.handleBlur}/>
    </RB.FormGroup>
  )
  : <div></div>

  }
})

module.exports = Datum;
