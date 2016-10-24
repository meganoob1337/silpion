var React = require('react');
var AppActions = require('../../actions/AppActions');

var SubmitButton = React.createClass({

  onClick: function(e) {
    e.preventDefault();
    AppActions.SubmitButtonClicked();
  },

  render: function() {
    if(this.props.data.disabled) {
      return <button disabled> {this.props.data.value}</button>

    }
    else {

      return <button className="btn btn-primary text-center" onClick={this.onClick}> {this.props.data.value}</button>
    }

  }
})
module.exports = SubmitButton;
