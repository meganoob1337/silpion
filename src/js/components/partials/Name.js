var React = require('react');
var AppActions = require('../../actions/AppActions');
var RB = require('react-bootstrap');

var Name = React.createClass({

    getInitialState: function() {
      return this.props;
    },
    getValidationState: function() {
      return "success";
    },
    handleChange: function(e) {
      AppActions.updateElement(this.state.id,e.target);
    },

    render: function(){
      return (
          <RB.FormGroup
            controlId={this.state.id}
            validationState={this.getValidationState()}

          >
            <RB.ControlLabel></RB.ControlLabel>
            <RB.FormControl
              type="text"
              value={this.state.value}
              placeholder={this.state.placeholder ? this.state.placeholder : ""}
              onChange={this.handleChange}
            />
            <RB.FormControl.Feedback />
          </RB.FormGroup>
      )
    }
});


module.exports = Name;
