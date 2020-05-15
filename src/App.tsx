import React from 'react';
import './App.css';
import {useTranslation, withTranslation} from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <table>
            <thead>
            <tr>
              <th>Translation Id</th>
              <th>Translation</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>login.auth.wrong</td>
              <td>{t('login.auth.wrong')}</td>
            </tr>
            <tr>
              <td>login.email</td>
              <td>{t('login.email')}</td>
            </tr>
            <tr>
              <td>login.email.error</td>
              <td>{t('login.email.error')}</td>
            </tr>
            <tr>
              <td>login.maintenance.message</td>
              <td>{t('login.maintenance.message')}</td>
            </tr>
            <tr>
              <td>login.password</td>
              <td>{t('login.password')}</td>
            </tr>
            <tr>
              <td>login.password.error</td>
              <td>{t('login.password.error')}</td>
            </tr>
            <tr>
              <td>login.reset</td>
              <td>{t('login.reset')}</td>
            </tr>
            <tr>
              <td>login.submit</td>
              <td>{t('login.submit')}</td>
            </tr>
            <tr>
              <td>login.title</td>
              <td>{t('login.title')}</td>
            </tr>

            </tbody>
          </table>
        </header>
      </div>
  );
}

export default withTranslation()(App);
