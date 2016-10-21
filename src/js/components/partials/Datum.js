var DatePicker = require("react-bootstrap-date-picker");
var React = require('react');
var RB = require('react-bootstrap');
var AppActions = require('../../actions/AppActions');
var Datum = React.createClass({

  componentWillMount: function() {
    this.value = new Date().toISOString();
  },
  handleChange: function(value) {
    console.log(value);
    AppActions.updateElement(this.props.data.id,value)
  },

  render: function() {
    return this.props.data ? (<RB.FormGroup>
      <RB.ControlLabel>{this.props.data.label}</RB.ControlLabel>
      <DatePicker  value={this.props.data.value} onChange={this.handleChange} />
    </RB.FormGroup>
  )
  : <div></div>

  }
})

module.exports = Datum;
