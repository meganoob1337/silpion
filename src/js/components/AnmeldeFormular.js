var React = require('react');
var RB = require('react-bootstrap');
var AnmeldeFormular = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
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
        <RB.FormGroup
          controlId="formBasicText2"
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
      </RB.Form>
    );
  }
});

module.exports = AnmeldeFormular;
