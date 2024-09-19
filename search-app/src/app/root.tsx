import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import ErrorBoundary from '../components/error_boundry/error_boundary';
import { ThemeProvider } from '../context/theme_context';
import ProviderWrapper from '../utils/provider_wrapper';
import '../index.css';
import SearchBar from '../components/search_bar/search_bar';

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary>
          <ProviderWrapper>
            <ThemeProvider>
              <div id="root">
                <SearchBar />
                <Outlet />
              </div>
            </ThemeProvider>
          </ProviderWrapper>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
