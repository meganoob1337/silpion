var React = require('react');
var RB = require('react-bootstrap');
var FormStore = require('../stores/FormStore');
var Name = require('./partials/Name');
var Address = require('./partials/Address');
var Datum = require('./partials/Datum');
var SubmitButton = require('./partials/SubmitButton');
var AnmeldeFormular = React.createClass({

  getInitialState: function() {
    return FormStore.getForm();
  },

  componentDidMount: function() {

    FormStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    FormStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(FormStore.getForm());
  },
  render() {
    return (
      <div className="form-wrap" >
      <RB.Form  >
      <Name data={this.state.lname} />
      <Name data={this.state.fname} />
      <Address street={this.state.street} number={this.state.number} />
      <Name value="test" label="Test" id="nameTest" />
      <Datum data={this.state.date1}/>
      <Datum data={this.state.date2}/>
      <SubmitButton data={{'value':'submit', 'disabled':false}} />
      </RB.Form>
      </div>
    );
  }
});

module.exports = AnmeldeFormular;
