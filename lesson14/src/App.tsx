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
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {NotFoundPage} from "./shared/NotFoundPage";
import {Post} from "./shared/Post";
import {Portal} from "./shared/Portal";

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
              <Routes>
                <Route path="/" element={<Navigate to="/posts" replace/>}/>
                <Route path="/posts" element={
                  <Content>
                    <CardsList/>
                  </Content>
                }/>
                <Route path="/posts/:id" element={
                  <Portal>
                    <Post/>
                  </Portal>
                } />
                <Route path="/auth" element={<Navigate to="/posts" replace/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
            </Layout>
          </PostContextProvider>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>); // это для HMR
