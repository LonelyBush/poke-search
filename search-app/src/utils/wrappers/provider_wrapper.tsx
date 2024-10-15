import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { ThemeProvider } from '../../lib/context/theme_context';
import setupStore from '../../lib/store/store';

function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={setupStore()}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

export default ProviderWrapper;
