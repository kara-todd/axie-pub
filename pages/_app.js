import Head from 'next/head';

import GlobalStyles from 'styles/global';
import ApolloProvider from 'components/ApolloProvider';
import IconBeer from 'components/ui/IconBeer';

import tw from 'twin.macro';

const AxiePub = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Axie Pub</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyles />

    <header tw="flex items-center justify-start w-full border-b border-gray-800 py-2 px-5">
      <IconBeer tw="h-8 mr-2" />
      <h1 tw="font-bold text-xl">Axie Pub</h1>
    </header>
    <main>
      <ApolloProvider>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  </>
);

export default AxiePub;
