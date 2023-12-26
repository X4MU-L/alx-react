import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

function Header() {
  //The useContext hook allows functional components to consume values from a React context.
  //The user and logOut values are accessed from the context and used in the component.
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <div className={css(style.appHeader)}>
        <img src={logo} className={css(style.appLogoImg)} alt='logo' />
        <h1 className={css(style.h1)}>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <div className={css(style.welcome)}>
          <section id='logoutSection'>
            <p>
              Welcome <strong>{user.email}</strong>
              <br />
              <em>
                <a href='#' onClick={logOut} id='LogoutLink'>
                  logout
                </a>
              </em>
            </p>
          </section>
        </div>
      )}
    </>
  );
}

const style = StyleSheet.create({
  appHeader: {
    display: 'flex',
    color: '#e0354b',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
    fontSize: '1.4rem',
    marginBottom: '300px',
    marginTop: '14%',
  },
  appLogoImg: {
    width: '200px',
    height: '200px',
  },
  h1: {
    fontSize: '2.5rem',
  },
  logOutButon: {
    ':hover': {
      cursor: 'pointer',
    },
  },
  welcome: {
    // display: 'flex',
    color: '#e0354b',
    alignItems: 'center',
    // borderBottom: '3px solid #e0354b',
    fontSize: '1.4rem',
    bottom: '45%',
    // top: '80%',
    position: 'relative',
  },
});

export default Header;
