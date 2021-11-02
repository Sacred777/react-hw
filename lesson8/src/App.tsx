import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import {Header} from './shared/Header';
import { Content } from './shared/Content';
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";

function AppComponent() {
  const [token] = useToken();

  return (
    <Layout>
      <Header token={token}/>
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
};

export const App = hot(() => <AppComponent />); // это для HMR
