/**
 * @jest-environment jsdom
 */

import '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import { AppContext } from '../App/AppContext';

// Mock the context provider to provide the desired values for testing
jest.mock('../App/AppContext', () => ({
  AppContext: jest.fn(),
}));

describe('Header component', () => {
  //task2 tests
  it('renders correctly with default context value', () => {
    const { queyBytestId, getByTestId } = render(
      //mounts the Header component with a default context value
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );

    // Verify that the logoutSection is not created
    expect(queyBytestId('logoutSection')).toBeNull();
  });

  it('renders correctly with user defined context (isLoggedIn is true)', () => {
    const { getByTestId } = render(
      <AppContext.Provider
        value={{ user: { isLoggedIn: true, email: 'mistu@example.com' } }}
      >
        <Header />
      </AppContext.Provider>
    );

    // Verify that the logoutSection is created
    expect(getByTestId('logoutSection')).toBeInTheDocument();
  });

  it('calls logOut spy when logout link is clicked', () => {
    const logOutSpy = jest.fn();

    const { getByTestId } = render(
      <AppContext.Provider
        value={{
          user: { isLoggedIn: true, email: 'mistu@example.com' },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    // Verify that the logoutSection is created
    expect(getByTestId('logoutSection')).toBeInTheDocument();

    // Click on the logout link
    fireEvent.click(getByTestId('LogoutLink'));

    // Verify that the logOut spy is called
    expect(logOutSpy).toHaveBeenCalled();
  });

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
