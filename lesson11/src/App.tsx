import React, {useEffect} from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {Layout} from "./shared/Layout";
import {CardsList} from "./shared/CardsList";

import {PostContextProvider} from './shared/context/postContext'
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {rootReducer, setToken} from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  useEffect(() => {
    const token = window.__token__;
    store.dispatch(setToken(token));
  }, []);

  return (
      <Provider store={store}>
          <PostContextProvider>
            <Layout>
              <Header/>
              <Content>
                <CardsList/>
              </Content>
            </Layout>
          </PostContextProvider>
      </Provider>
  );
};

export const App = hot(() => <AppComponent/>); // это для HMR
