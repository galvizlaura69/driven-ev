import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from "./store/store";
import { Provider } from 'react-redux';


import Home from './components/Home';
import Counter from './containers/Counter';
import Task from './components/Task';

const BasicExample = () => (
  <Provider store={store}>

  <Router>
    <div>
      <Counter/>
      <ul>
        <li><Link to="/">Home task</Link></li>
        <li><Link to="/task/1">Task id</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/task/:taskId" component={Task} />
    </div>
  </Router>
  </Provider>
);

render(<BasicExample />, document.getElementById('root'));
