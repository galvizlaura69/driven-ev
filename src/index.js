import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Home from './pages/Home';
import Task from './pages/Task';
import { Provider } from 'react-redux';
import store from './store/store';

const BasicExample = () => (
  <Provider store={store}>

  <Router>
    <div>
      <ul>
        <li><Link to="/">Home task</Link></li>
        <li><Link to="/task/1">Task id</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/task/:taskId" component={Task} />
    </div>
  </Router>
  </Provider>
);

render(<BasicExample />, document.getElementById('root'));
