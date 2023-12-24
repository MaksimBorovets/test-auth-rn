import { ThemeProvider } from 'styled-components/native';

import RootNavigator from './src/navigation/RootNavigator';
import theme from './src/styles/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
}

export default App;
