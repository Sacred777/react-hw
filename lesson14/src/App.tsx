import React, {useEffect, useState} from "react";
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
import {RootAction, rootReducer, RootState} from "./store/reducer";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {saveToken} from "./store/token/actions";
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
));

function AppComponent() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  useEffect(() => {
    store.dispatch(saveToken());
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <PostContextProvider>
            <Layout>
              <Header/>
              <Content>
                <CardsList/>
              </Content>
            </Layout>
          </PostContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
};

export const App = hot(() => <AppComponent/>); // это для HMR
