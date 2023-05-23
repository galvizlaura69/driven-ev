import React from 'react';
import { Provider } from 'react-redux';

import Counter from './Counter';
import Test from './Test';
import DisplayState from './DisplayState';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Counter />
      <Test>
        <DisplayState />
      </Test>
    </div>
  </Provider>
);

export default App;