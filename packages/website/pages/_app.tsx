import '@ruids/css/dist/styles.css';
import { AppContext } from '@/components';
import {
  AppInitialProps,
  NextComponentType,
  NextPageContext,
} from 'next/dist/next-server/lib/utils';

interface AppProps extends AppInitialProps {
  Component: NextComponentType<NextPageContext, {}, {}>;
  pageProps: any;
  dirs: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider
      value={{
        messages: [],
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
