/**
 * @jest-environment jsdom
 */
import { StyleSheetTestUtils } from 'aphrodite';

import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';

// Suppress style injection at the beginning of the test file using this method from aphrodite
StyleSheetTestUtils.suppressStyleInjection();
describe('CourseListRow', () => {
  it('renders one cell with colspan=2 when textSecondCell does not exist, and "isHeader" is "true"', () => {
    /*Creates a shallow render of the component, giving values to it's props and rendering it (with render)...
        'render' renders components one level deep (i.e. the component and it's children), but does not render 
        it's child component unless explicitly included in the test or if the test interacts with them in some way.
        It's creating a shallow representation of the component's output for testing purposes. It renders component 
        for testing purpose, just like it will be rendered in browser's DOM(from it's parent component) where users 
        will interact with it(that's why the approriate props are passed to it)*/
    render(<CourseListRow isHeader={true} textFirstCell='Header' />); // render the component with props and give the props values(to create a shallow render).
    expect(screen.getByText('Header')).toHaveAttribute('colSpan', '2');
    /* then use screen to search for the element that has the value 'Header'(this value was passed to the prop 
            'textFirstCell' here in the render). Then checks if the element in which this props is used has attribute 
            'colSpan' with the value of '2' (this will check for the element being rendered in which the prop(textFirstCell)
            is being rendered i.e. inside the component definition in the file  CourseListRow.js imported)*/
  });

  it('renders two cells when textSecondCell is present and "isHeader" is "true"', () => {
    render(
      <CourseListRow
        isHeader={true}
        textFirstCell='Header 1'
        textSecondCell='Header 2'
      />
    );
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
  });

  it('renders correctly two <td> elements within a <tr> element when "isHeader" is false', () => {
    /* In other to render, and then later assert that two <td> elements are rendered in a <th>
        (according to the element structure of the component), i need to give both props in the two <td> 
        elements values each and then assert that each of them renders in the virtual DOM*/
    render(
      <CourseListRow
        isHeader={false}
        textFirstCell='dataCell-1'
        textSecondCell='dataCell-2'
      />
    ); //renders component
    expect(screen.getByText('dataCell-1')).toBeInTheDocument(); //make assertions on the component's output (Remember RTL(react testing library) is focused on what output the user will see in  the browser when interacting with components
    expect(screen.getByText('dataCell-2')).toBeInTheDocument(); //This means it exxpects the values ('dataCell-1' and'dataCell-2') to be the output of the two <td> element (which the user will see when interacting with the component in the browser)
  });
});
