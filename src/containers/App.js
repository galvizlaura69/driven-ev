import React from 'react';
import { Provider } from 'react-redux';

import Counter from './Counter';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
);

export default App;