/**
 * @jest-environment jsdom
 */
//The above is used to indicate to Node.js the DOM environment this test will be run in
import '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
// import { shallow } from 'enzyme';
import App from './App'; //imports the React 'App' component to test
import { screen, render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection at the beginning of the test file using this method from aphrodite
StyleSheetTestUtils.suppressStyleInjection();

describe('App', () => {
  //Test suite
  it('test to check that CourseList is not displayed', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.queryByText('Available courses')).not.toBeInTheDocument(); //Test case(or test unit) check
  });
  it('when isLoggedIn is true, verify that the <Login> is not included in DOM, and CourseList component is included', () => {
    render(<App isLoggedIn={true} />);
    expect(
      screen.getByText('Login to access the full dashboard')
    ).not.toBeInTheDocument();
    expect(screen.getByText('Available courses')).toBeInTheDocument();
  });

  it('verifies that pressing "Control" + "h" calls logOut and displays an alert(Logging you out)', () => {
    // Mock the logOut function
    const mockTheLogOut = jest.fn();
    //renders the component
    render(<App logOut={mockTheLogOut} />);
    //simulate the user press down the 'ctrl' + 'h'
    fireEvent.keyDown(window, { key: 'control' });
    fireEvent.keyDown(window, { key: 'h' });
    //Assertions
    expect(mockTheLogOut).toHaveBeenCalled(); //checks if the logOut function is called
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
  // Clean up all mock functions after the tests
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('tests that default state for "displayDrawer" is false', () => {
    const { rerender } = render(<App />);

    // Find an element within the Notifications component
    const displayDrawerElement =
      screen.getByTestId('display-drawer').__reactInternalInstance;

    // Assert the default state
    expect(displayDrawerElement.state.displayDrawer).toBe(false);
  });

  it('verifies that the state of the container has been updated correctly', () => {});
});

//BELOW ARE React/Enzyme tests
// describe('App', () => { // Used to define a test suite.
//     it('test that App renders without crashing', () => { // Defines a test case.
//         const wrapper = shallow(<App />); // enzyme 'shallow' function makes it easy to store a shallow copy of the component(here it's stored in the var 'wrapper.')
//         expect(wrapper.exists()).toBe(true); // 'expect' is a jest utility function used for making assertions in test cases about the behavior and output of the code.
//     });

//     it('verifies that "App" renders a div with the class "App-header"', () => {
//         const wrapper = shallow(<App />);
//         const appHeader = wrapper.find('.App-body');
//         expect(appHeader.exists()).toBe(true);
//     });

//     it('verifies that "App" renders a div with the class "App-body"', () => {
//         const wrapper = shallow(<App />);
//         const appDiv = wrapper.find(".App-body");
//         expect(appDiv.exists()).toBe(true);
//     });

//     it('verifies that "App" renders a div with the class "App-footer"', () => {
//         const wrapper = shallow(<App />);
//         const appFooter = wrapper.find(".App-footer");
//         expect(appFooter.exists()).toBe(true);
//     });
//     it('It should contain the Notifications component', () => {
//         const wrapper = shallow(<Notification />);
//         expect(wrapper.contains(<Notification />)).toEqual(true);
//     });
//     it('It should contain the Header component', () => {
//         const wrapper = shallow(<Header />);
//         expect(wrapper.contains(<Header />)).toEqual(true);
//     });
//     it('It should contain the Login component', () => {
//         const wrapper = shallow(<Login />);
//         expect(wrapper.contains(<Login />)).toEqual(true);
//     });
//     it('It should contain the Footer component', () => {
//         const wrapper = shallow(<Footer />);
//         expect(wrapper.contains(<Footer />)).toEqual(true);
//     });
// });
