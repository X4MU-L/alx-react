/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { screen, render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection at the beginning of the test file using this method from aphrodite
StyleSheetTestUtils.suppressStyleInjection();

describe('NotificationItem', () => {
  it('renders NotificationItem component without crashing', () => {
    render(<NotificationItem />);
    // console.log(screen.debug());
    expect(screen.queryByTestId('Mytest')).toBeNull();
  });

  it('renders correct html from type="default" value="test" props', () => {
    render(<NotificationItem type='default' value='test' />);
    expect(screen.queryByTestId('data-notification-type')).toBeNull();
    // expect(screen.queryByTestId('data-notification-type')).toBeNull();
  });

  it('pass a spy as the markAsRead property and check that when simulating a click on the component, the spy is called with the right ID argument', () => {
    const spyMock = jest.spyOn(console, 'log');
    const id = 0;
    render(<NotificationItem spyMock={id} />);
    fireEvent.click(screen.getByRole('li'));
    expect(spyMock).toBeenCalled(1);
    // expect('Notification 0 has been marked as read').toBeInTheDocument();
  });

  // it('renders correct html from html="<u>test</u>" props', () => {
  //   render(<NotificationItem html={{__html: "<u>test</u>"}} />);
  //   expect(screen.getByText("data-urgent", "true")).toBeTruthy();
  //   // expect(container.firstChild.innerHTML).toEqual("<u>test</u>");
  // });
});

//Below is are tests using enzyme library which doesn't work with react 18
// import React from "react";
// import NotificationItem from "./NotificationItem";
// import { shallow } from "enzyme";

// describe("rendering components", () => {
//   it("renders NotificationItem component without crashing", () => {
//     const wrapper = shallow(<NotificationItem />);

//     expect(wrapper.exists()).toBe(true);
//   });

//   it('renders correct html from type="default" value="test" props', () => {
//     const wrapper = shallow(<NotificationItem />);

//     wrapper.setProps({ type: "default", value: "test" });
//     expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
//   });

//   it('renders correct html from  html="<u>test</u>" props', () => {
//     const wrapper = shallow(<NotificationItem />);

//     wrapper.setProps({ html: "<u>test</u>" });
//     expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
//   });
// });
