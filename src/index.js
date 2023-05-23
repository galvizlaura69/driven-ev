import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from "./store/store";
import { Provider } from 'react-redux';

import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';
import Counter from './containers/Counter';

const BasicExample = () => (
  <Provider store={store}>

  <Router>
    <div>
      <Counter/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
  </Provider>
);

render(<BasicExample />, document.getElementById('root'));
