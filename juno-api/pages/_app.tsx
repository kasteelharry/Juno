import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import Script from 'next/script';

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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-J5ME1XRV0M" />
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J5ME1XRV0M', {
            page_path: window.location.pathname,
          });
        `,
            }}
        />
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
