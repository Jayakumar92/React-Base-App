import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "@contexts";
// import { store } from '@redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { store, sagaMiddleware, rootSaga, persistor } from "@redux";


sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
