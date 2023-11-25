import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { EAppStatus } from 'types/appStatus';
import { GlobalContext } from 'GlobalContext';
import { PageLayout } from 'components/PageLayout/PageLayout';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [appStatus, setAppStatus] = useState<EAppStatus>(EAppStatus.INIT)

  const globalContextValue = {
    isMobile: screenWidth < 1200,
    screenHeight: screenHeight,
    screenWidth: screenWidth,
    appStatus: appStatus
  };
  const httpLink = createHttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/6rtrkvbq91ik",
  });
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer im2JBZjZPtVtoYI629FHosVOC0Iin8xHmcm-EBN4S6U`,
      },
    };
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })


  const handleResize = (): void => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
  };

  // init method

  const setRunningApp = () => {
    setAppStatus(EAppStatus.RUN);
  }

  const initApp = (): void => {
    setAppStatus(EAppStatus.START);
    const runTimeout = setTimeout(() => {
      setRunningApp();
    }, 2000);
    const handleSetAppRunning = () => {
      clearTimeout(runTimeout);
      setRunningApp();
    }
    window.addEventListener("click", () => {
      handleSetAppRunning();
    })
    window.addEventListener("keydown", () => {
      handleSetAppRunning();
    })

  }
  useEffect(() => {
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => handleResize());
    initApp();
  }, []);

  return (

    <ApolloProvider client={client}>
      <GlobalContext.Provider value={globalContextValue}>
        <PageLayout>
          <Head>
            <link rel="icon" href="sued-logo.png" />
          </Head>
          <Component {...pageProps} />
        </PageLayout>
      </GlobalContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
