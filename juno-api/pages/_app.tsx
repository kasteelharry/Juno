import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
  <Head>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Personal website build to showcase my work and learn more about web development."
    />
    <link rel="apple-touch-icon" href="/logo192.png" />

    <link rel="manifest" href="/manifest.json" />

    <title>Joris Kuiper</title>
  </Head>
      <Component {...pageProps} />
    </Layout>
}

export default MyApp
