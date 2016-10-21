var React = require('react');
var AppActions = require('../../actions/AppActions');
var RB = require('react-bootstrap');

var Street = React.createClass({

  getValidationState: function() {
    return "success";
  },

  handleChange: function(e) {
    AppActions.updateElement(this.props.data.id,e.target.value);
  },

  render: function(){
    return this.props.data ? (
        <RB.FormGroup
          controlId={this.props.data.id}
          validationState={this.getValidationState()}

        >
          <RB.ControlLabel>{this.props.data.label}</RB.ControlLabel>
          <RB.FormControl
            type="text"
            value={this.props.data.value}
            placeholder={this.props.data.placeholder ? this.props.data.placeholder : ""}
            onChange={this.handleChange}
          />

          <RB.FormControl.Feedback />
        </RB.FormGroup>
    ) : <div></div>;
  }
});


module.exports = Street;
