var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Steven',
      lastName: 'Wong',
      message: 'Default message'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    }
  },
  onButtonClick: function(e) {
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if( typeof name == 'string' && name.length > 0 ) {
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    var name = this.state.name;
    var lastName = this.props.lastName;

    return (
      <div>
        <GreeterMessage />
        <GreeterForm />
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
