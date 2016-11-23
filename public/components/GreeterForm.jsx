var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    var updated = {};
    if( name.length > 0 ) {
      this.refs.name.value = '';
      updated.name = name;
    }

    if( message.length > 0 ) {
      this.refs.message.value = '';
      updated.message = message;
    }

    this.props.onUpdate(updated);

  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div><input type="text" ref="name" placeholder="Enter name"/></div>
        <div><textarea ref="message" placeholder="Enter message"></textarea></div>
        <div><button>Submit</button></div>
      </form>
    );
  }
});

module.exports = GreeterForm;
