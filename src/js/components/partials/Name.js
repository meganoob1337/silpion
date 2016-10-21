var React = require('react');
var RB = require('react-bootstrap');

var Name = React.createClass({

    render: function(){
      return (
        <RB.Form inline>
          <RB.FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
            
          >
            <RB.ControlLabel>Working example with validation</RB.ControlLabel>
            <RB.FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <RB.FormControl.Feedback />
            <RB.HelpBlock>Validation is based on string length.</RB.HelpBlock>
          </RB.FormGroup>
      )
    }
});


module.exports = Menu;
