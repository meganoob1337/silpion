var React = require('react');
var RB = require('react-bootstrap');
var FormStore = require('../stores/FormStore');
var Name = require('./partials/Name');
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
      <Name value="test" id="nameTest" />


      </RB.Form>
    );
  }
});

module.exports = AnmeldeFormular;
