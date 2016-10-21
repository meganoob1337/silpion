var React = require('react');
var Formsy = require('formsy-react');
var Name = React.createClass({

    render: function(){
      return (
        <div class="form-group">
          <label class="col-md-4 control-label" for={this.props.id}>{this.props.title}</label>
          <div class="col-md-4">
          <input id={this.props.id} name="name" type="text" placeholder="Bitte Namen eingeben" class="form-control input-md" required="">

          </div>
        </div>

      )
    }
});


module.exports = Menu;
