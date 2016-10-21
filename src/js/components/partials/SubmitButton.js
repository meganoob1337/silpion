var React = require('react');

var SubmitButton = React.createClass({

  render: function() {
    if(this.props.data.disabled) {
      return <button disabled> {this.props.data.value}</button>

    }
    else {

      return <button > {this.props.data.value}</button>
    }

  }
})
module.exports = SubmitButton;
