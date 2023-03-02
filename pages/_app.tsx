import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { EAppStatus } from './types/appStatus';
import { getIsInit, getIsRun, getIsStart } from './utils/appStatusUtils';
import { GlobalContext } from './GlobalContext';
import { PageLayout } from './components/PageLayout/PageLayout';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

function MyApp({ Component, pageProps }: AppProps) {
 
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [appStatus, setAppStatus] = useState(EAppStatus.NONE);
  const isInit = getIsInit(appStatus);
  const isStart = getIsStart(appStatus);
  const isRun = getIsRun(appStatus);

  const globalContextValue = {
    screenWidth,
    screenHeight,
    isInit,
    isStart,
    isRun,
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
  useEffect(() => {
    setAppStatus(EAppStatus.INIT);
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
    const body = document.querySelector('body');
    window.addEventListener("resize", () => handleResize());
  }, []);

  return (
    <ApolloProvider client={client}>
    <GlobalContext.Provider value={globalContextValue}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </GlobalContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
