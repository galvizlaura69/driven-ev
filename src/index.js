import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './style.css';


import Home from './pages/Home';
import Task from './pages/Task';
import { Provider } from 'react-redux';
import store from './store/store';

const BasicExample = () => (
  <Provider store={store}>

  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/task/:taskId" component={Task} />
    </div>
  </Router>
  </Provider>
);

render(<BasicExample />, document.getElementById('root'));
