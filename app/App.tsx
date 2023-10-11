import React from 'react';
import type {PropsWithChildren} from 'react';

import { Provider } from 'react-redux';
import store from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>

    </Provider>
  )
}

export default App;
