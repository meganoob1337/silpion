var React = require('react');
var AppActions = require('../../actions/AppActions');

var SubmitButton = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    AppActions.SubmitButtonClicked();
  },

  render: function() {
    var classes = "";
    if(this.props.data.status == 'submitted'){
      classes = 'btn-success';
    }
        return <button className={"btn btn-primary text-center " + classes } onClick={this.onClick}> {this.props.data.value}</button>

  }
})
module.exports = SubmitButton;
