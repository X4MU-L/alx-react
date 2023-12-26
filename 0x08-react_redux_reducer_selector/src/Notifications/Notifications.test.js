/**
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { shallow } from 'enzyme';
import Notifications from './Notifications'; //imports the React 'Notifications' component to test.
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection at the beginning of the test file using this method from aphrodite
StyleSheetTestUtils.suppressStyleInjection();

describe('Notifications', () => {
  it('checks that the menu item is being displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    // console.log(screen);
    expect(
      screen.ByText('Here is the list of notifications')
    ).toBeInTheDocument();
  });
  it('checks that the div.Notifications is not being displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(
      screen.getByText('Close button has been clicked')
    ).not.toBeInTheDocument();
  });
  it('checks that the menu item is being displayed when displayDrawer is "true"', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });
  it('checks that the div.Notifications is being displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(
      screen.getByText('Close button has been clicked')
    ).toBeInTheDocument();
  });
  it('verifies that Notifications renders correctly if you pass an empty array', () => {
    render(<Notifications listNotifications={[]} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });
  it('verifies if you don’t pass the listNotifications property', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });
  it('verifies that when you pass a list of notifications, the component renders it correctly', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 2, type: 'urgent', html: getLatestNotification() },
    ];

    render(<Notifications listNotifications={listNotifications} />);
    expect(screen.getByText('Your notifications')).toHaveLength(
      listNotifications.length
    );
  });
  it('verifies that when listNotifications is empty the message: "Here is the list of notifications" is not displayed, but "No new notification for now" is', () => {
    const listNotifications = [];

    render(<Notifications listNotifications={listNotifications} />);
    expect(
      screen.getByText('Here is the list of notifications')
    ).not.toBeInTheDocument();
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
  });

  it('mockup the console.log function and check that function "markAsRead" on an instance of the component, the spy is being called with the right message', () => {
    //mocks console.log
    const mockConsoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});
    // Mock notifications data
    const notifications = { id: 1, message: 'Notification 1' };
    const { getByText } = render(
      <NotificationItem notifications={notifications} />
    );
    // Simulate a click on the first notification
    fireEvent.click(getByText('Notification 1'));
    expect(mockConsoleSpy).toHaveBeenCalledWith(
      'Notification 0 has been marked as read'
    );
  });

  // Clean up all mock functions after the tests
  afterEach(() => {
    jest.clearAllMocks();
  });
});

/* 
Below are tests created with enzyme and React. 
*/
// describe('Notifications', () => { // Used to define a test suite.
//     it('tests that Notifications renders without crashing', () => { // Used to organize/define a test case.
//         const wrapper = shallow(<Notifications />); // enzyme 'shallow' function makes it easy to store a rendered copy of the component(here it's stored in the var 'wrapper.')
//         expect(wrapper.exists()).toBe(true); // expect is a jest function used for making assertions in test cases about the behavior and output of the code.
//     });

//     it('verifies that Notifications renders three list items', () => {
//         const wrapper = shallow(<Notifications />);
//         const listItems = wrapper.find('li');
//         expect(listItems.length).toBe(3);
//     });

//     it('verifies that Notifications renders the text: "Here is the list of notifications"', () => {
//         const wrapper = shallow(<Notifications />);
//         expect(wrapper.text()).toContain('Here is the list of notifications');
//     })
// });
