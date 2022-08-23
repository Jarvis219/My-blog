import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

import ThemeProvider from '@/context/ThemeContext';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <ThemeProvider>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
