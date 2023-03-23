import { StatusBar } from 'react-native';

import Home from './src/screens/Home';
import { store } from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Home />
    </Provider>
  );
}

