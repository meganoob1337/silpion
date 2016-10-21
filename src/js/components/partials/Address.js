var React = require('react');
var AppActions = require('../../actions/AppActions');
var RB = require('react-bootstrap');
var Street = require('./Street');
var StrNumber = require('./StrNumber');

var Address = React.createClass({

  getValidationState: function() {
    return "success";
  },

  handleChange: function(e) {
    AppActions.updateElement(this.props.data.id,e.target.value);
  },

  render: function(){
    return this.props ? (
      <div>
      <Street data={this.props.street} />
      <StrNumber data={this.props.number} />
        </div>
    ) : <div></div>;
  }
});


module.exports = Address;
