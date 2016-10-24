var React = require('react');
var RB = require('react-bootstrap');
var FormStore = require('../stores/FormStore');
var Name = require('./partials/Name');
var Address = require('./partials/Address');
var Datum = require('./partials/Datum');
var SubmitButton = require('./partials/SubmitButton');
var Creditcard = require('./partials/Creditcard');
var Plz = require('./partials/Plz');
var City = require('./partials/City');
var AnmeldeFormular = React.createClass({

  getInitialState: function() {
    return {'forms':FormStore.getForm(),'buttonState':FormStore.getButtonState()};
  },

  componentDidMount: function() {

    FormStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FormStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({'forms':FormStore.getForm(),'buttonState':FormStore.getButtonState()});
  },
  render() {
    return (
      <div className="form-wrap" >
      <RB.Form  >
      <Name data={this.state.forms.lname} />
      <Name data={this.state.forms.fname} />
      <Address street={this.state.forms.street} number={this.state.forms.number} />
      <Plz data={this.state.forms.plz} />
      <City data={this.state.forms.city} />
      <Datum data={this.state.forms.date1}/>
      <Datum data={this.state.forms.date2}/>
      <Creditcard data={this.state.forms.creditcard} />
      <SubmitButton data={this.state.buttonState} />
      </RB.Form>
      </div>
    );
  }
});

module.exports = AnmeldeFormular;
