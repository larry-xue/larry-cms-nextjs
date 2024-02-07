import { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps }: AppProps<any>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
