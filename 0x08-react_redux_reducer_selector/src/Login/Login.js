import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function Login({ logIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); I removed this because i'm now passing the state of isLoggedIn through the 'Login' functionn from the parent.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  // const { logIn } = props;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // setIsLoggedIn(true); I will be handling the state and setState of isLoggedIn through 'Login' function from the Parent
    logIn(e.target.elements.email.value, e.target.elements.password.value); //This will collect the values entered in the email and password input fields, respectively.
  };
  //handlers the inputs will call when the value in the input field is changed.
  //The local state will update with what the user is typing...
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // The below effect runs whenever email or password changes.
  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(style.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit} className={css(style.small)}>
          <label htmlFor='email' className={css(style.labelMarginRight)}>
            Email:
          </label>
          <input
            value={email}
            onChange={handleChangeEmail}
            id='email'
            name='email'
            type='email'
            className={css(style.formMargin)}
          ></input>
          <label
            value={password}
            onChange={handleChangePassword}
            htmlFor='password'
            className={css(style.labelMarginRight, style.labelMarginLeft)}
          >
            Password:
          </label>
          <input
            id='password'
            name='password'
            type='password'
            className={css(style.formMargin)}
          ></input>
          <input
            disabled={enableSubmit}
            type='submit'
            value='OK'
            className={css(style.labelMarginLeft, style.formMargin)}
          />
          {/*the disabled property starts the button in a disabled state, as conditioned in the useEffect, as no input has been provided by the user yet*/}
        </form>
      </div>
    </React.Fragment>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

const style = StyleSheet.create({
  AppBody: {
    color: 'black',
    padding: '1rem',
    marginTop: '-13.5rem',
    position: 'relative',
    fontSize: '1.1rem',
  },
  labelMarginRight: {
    marginRight: '10px',
  },
  labelMarginLeft: {
    marginLeft: '10px',
  },
  small: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      padding: '0.1px',
      // marginTop: '10px',
      position: 'absolute',
      fontSize: '1.1rem',
      // marginRight: '25px'
    },
  },
  formMargin: {
    '@media (max-width: 900px)': {
      // margin: '10px',
      border: 'none',
      background: 'none',
      left: '10px',
      margin: '2px',
    },
  },
});

export default Login;
