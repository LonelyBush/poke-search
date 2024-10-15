import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { ThemeProvider } from '../lib/context/theme_context';
import ProviderWrapper from '../utils/wrappers/provider_wrapper';
import '../index.css';
import DefaultErrorBoundary from '../components/base/error_boundary/error_boundary';
import Footer from '../components/base/footer/footer';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Poke Search</title>
        <Links />
      </head>
      <body>
        <ProviderWrapper>
          <ThemeProvider>
            <div id="root">
              <Outlet />
            </div>
            <Footer />
          </ThemeProvider>
        </ProviderWrapper>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Error!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <DefaultErrorBoundary />
        <Scripts />
      </body>
    </html>
  );
}
