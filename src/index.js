import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Body from './component/Body';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Login from './Admin/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Body}/>
      <Route path="/AboutUs" component={About}/>
      <Route path="/ContactUs" component={ContactUs}/>
      <Route path="/Admin" component={Login} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
