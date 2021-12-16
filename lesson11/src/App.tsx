import React, {useEffect} from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {Layout} from "./shared/Layout";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from './shared/context/userContext'
import {PostContextProvider} from './shared/context/postContext'
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider, useDispatch} from "react-redux";
import {rootReducer, setToken} from "./store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {

  return (
    <Provider store={store}>
        <UserContextProvider>
          <PostContextProvider>
            <Layout>
              <Header/>
              <Content>
                <CardsList/>
              </Content>
            </Layout>
          </PostContextProvider>
        </UserContextProvider>
    </Provider>
  );
};

export const App = hot(() => <AppComponent/>); // это для HMR
