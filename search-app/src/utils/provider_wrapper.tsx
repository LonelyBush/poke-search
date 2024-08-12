import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import store from '../store/store';
import { ThemeProvider } from '../context/theme_context';

function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

export default ProviderWrapper;
