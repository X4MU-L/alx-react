import React, { useContext } from 'react';
// import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      <div className={css(style.AppFooter)}>
        {user.isLoggedIn && (
          <a className={css(style.contact)} href='#'>
            Contact us
          </a>
        )}
        <p>
          Copyright {getFooterCopy()} - {getFullYear()}
        </p>
      </div>
    </>
  );
}

export default Footer;

const style = StyleSheet.create({
  AppFooter: {
    color: 'black',
    position: 'relative',
    bottom: '-4rem',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    top: '8.5rem',
    borderTop: '3px solid #e0354b',
    // height: '100%',
  },
  contact: {
    ':hover': {
      cursor: 'pointer',
    },
  },
});
