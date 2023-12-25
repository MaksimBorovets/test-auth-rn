import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import RootNavigator from './src/navigation/RootNavigator';
import theme from './src/styles/theme/theme';
import { store } from './src/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
