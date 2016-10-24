var React = require('react');
var AppActions = require('../../actions/AppActions');
var RB = require('react-bootstrap');

var Name = React.createClass({



    handleChange: function(e) {
      AppActions.updateElement(this.props.data.id,e.target.value);
    },
    handleBlur: function(e) {
      AppActions.blurElement(this.props.data.id);
    },

    render: function(){
      return this.props.data ? (
          <RB.FormGroup
    className={this.props.data.id}
            controlId={this.props.data.id}
            validationState={this.props.data.validationState}

          >
            <RB.ControlLabel>{this.props.data.label}</RB.ControlLabel>
            <RB.FormControl
              type="text"
              name={this.props.data.id}
              value={this.props.data.value}
              placeholder={this.props.data.placeholder ? this.props.data.placeholder : ""}
              onChange={this.handleChange}
              onBlur={this.handleBlur}

            />
            <RB.FormControl.Feedback />
          </RB.FormGroup>
      ) : <div></div>;
    }
});


module.exports = Name;
