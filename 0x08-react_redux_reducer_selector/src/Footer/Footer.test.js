/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
// import { AppContext } from '../App/AppContext';

// Mock the context provider to provide the desired values for testing
jest.mock('../App/AppContext', () => ({
  AppContext: jest.fn(),
}));

describe('Header component', () => {
  //task3 tests
  it('does not display the link when the user is logged out', () => {
    AppContext.mockReturnValue({
      // user: {
      //   isLoggedIn: false,
      //   email: '',
      //   password: '',
      // },
      user: jest.fn(),
      logOut: jest.fn(),
    });

    render(<Header />);
    const logoutLink = screen.queryByText('LogoutLink');
    expect(logoutLink).toBeNull();
  });

  it('displays the link when the user is logged in', () => {
    AppContext.mockReturnValue({
      user: jest.fn(),
      logOut: jest.fn(),
    });

    render(<Header />);

    const logoutLink = screen.queryByText('LogoutLink');
    expect(logoutLink).toBeInTheDocument();
  });
});
