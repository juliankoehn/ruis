import '@ruids/css/dist/styles.css';
import { Container } from '@ruids/components';

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
