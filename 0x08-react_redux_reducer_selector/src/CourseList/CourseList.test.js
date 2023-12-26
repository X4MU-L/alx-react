/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import React from 'react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection at the beginning of the test file using this method from aphrodite
StyleSheetTestUtils.suppressStyleInjection();

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });
  it('Checks that it renders the 5 different rows', () => {
    render(<CourseList />);
    expect(screen.getByText('Available courses')).toBeInTheDocument();
    expect(screen.getByText('Course name', 'Credit')).toBeInTheDocument();
    expect(screen.getByText('ES6', '60')).toBeInTheDocument();
    expect(screen.getByText('Webpack', '20')).toBeInTheDocument();
    expect(screen.getByText('React', '40')).toBeInTheDocument();
  });
  it('verifies that CourseList renders correctly if you pass an empty array', () => {
    render(<CourseList listCourses={[]} />);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });
  it('verifies that CourseList renders correctly if you pass an empty array', () => {
    render(<CourseList />);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });
  it('verifies that CourseList renders correctly if you pass an empty array', () => {
    const listCourses = [
      //This array of objects will be passed as values to App's(parent) child component (CourseList)
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    render(<CourseList listCourses={listCourses} />);
    expect(screen.getByText('CourseList')).toHaveLength(listCourses.length);
  });
});
