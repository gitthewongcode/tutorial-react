var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

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

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleUpdate: function(obj) {
    this.setState(obj);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onUpdate={this.handleUpdate}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
