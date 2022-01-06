import Head from 'next/head';

import ApolloProvider from 'components/ApolloProvider';
import IconBeer from 'components/ui/IconBeer';

import 'styles/globals.css';

const AxiePub = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Axie Pub</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="flex items-center justify-start w-full border-b border-gray-800 py-2 px-5">
      <IconBeer className="h-8 mr-2" />
      <h1 className="font-bold text-xl">Axie Pub</h1>
    </header>
    <main>
      <ApolloProvider>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  </>
);

export default AxiePub;
