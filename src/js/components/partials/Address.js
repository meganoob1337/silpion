var React = require('react');
var AppActions = require('../../actions/AppActions');
var RB = require('react-bootstrap');
var Street = require('./Street');
var StrNumber = require('./StrNumber');

var Address = React.createClass({



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
