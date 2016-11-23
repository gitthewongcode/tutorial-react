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
  updated : {name:'React',message:'This is a default message'},
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value || this.updated.name;
    var message = this.refs.message.value || this.updated.message;

    this.updated = {
      name: name,
      message: message
    };

    this.refs.name.value = ''; // this will clear the field
    this.refs.message.value = '';
    console.log( this.updated );
    console.log( name + '_' +  message );
    this.props.onUpdate(this.updated);

  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <br/>
        <textarea ref="message"/>
        <br/>
        <button>Set Name</button>
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
