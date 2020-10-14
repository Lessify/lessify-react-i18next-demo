import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';
import {LessifyReactI18next} from '@lessify/react-i18next'

i18next
.use(I18NextHttpBackend)
.use(initReactI18next)
.init(
    {
      fallbackLng: 'en',
      lng: 'en',
      debug: true,
      keySeparator: false,
      interpolation: {
        escapeValue: false
      },
      backend: LessifyReactI18next(
          {
            space : {
              spaceId: 'e600fed0-0674-11eb-8ebc-355c3e3200ae',
              environment: 'master',
              apiKey: 'api-key-Tqcgc-38872940-0d32-11eb-8a0e-61e5b1516e7a-Zlh7j'
            }
          }
      )
    }
)

ReactDOM.render(
    <Suspense fallback="loading">
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Suspense>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
