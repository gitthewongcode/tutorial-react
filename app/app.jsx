var React = require('react');
var ReactDOM = require('react-dom');

// same as (object destructoring)
// var Route = require('react-router').Route;
// each name inside {}
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
