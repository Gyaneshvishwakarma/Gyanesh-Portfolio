// pages/_app.tsx
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gyanesh Vishwakarma | Web Developer Portfolio</title>
        <meta name="description" content="Explore the portfolio of Gyanesh Vishwakarma, a web developer skilled in React, Next.js, and full-stack development." />
        <meta name="keywords" content="Gyanesh Vishwakarma, web developer, portfolio, React, Next.js, full-stack developer" />
        <meta name="author" content="Gyanesh Vishwakarma" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
