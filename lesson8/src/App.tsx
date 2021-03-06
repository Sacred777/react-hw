import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from './shared/context/tokenContext'
import { UserContextProvider } from './shared/context/userContext'
import { PostContextProvider } from './shared/context/postContext'

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
};

export const App = hot(() => <AppComponent />); // это для HMR
