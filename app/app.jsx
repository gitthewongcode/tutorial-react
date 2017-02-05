var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Steve',
  location: 'Virginia'
};

var objTwo = {
  age: 34,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>boilerplate</h1>,
  document.getElementById('app')
);
