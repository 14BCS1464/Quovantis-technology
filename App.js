import React from 'react';
import { Provider} from 'react-redux'

import configureStore from "./Src/config/configureStore";
import  Navigator from './Src/navigator/RootNavigator'

const store = configureStore;
export  default class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
          <Navigator/>
        </Provider>
    )
  }
}
