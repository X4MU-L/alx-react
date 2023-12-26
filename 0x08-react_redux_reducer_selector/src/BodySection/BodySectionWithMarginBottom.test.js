/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { container } from 'webpack';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection at the beginning of the test file using this method from aphrodite
StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom', () => {
  it('renders correctly with BodySection and passes props correctly', () => {
    const { container } = render(
      <BodySectionWithMarginBottom prop1='Value 1' prop2='Value 2' />
    );

    //checks if it renders BodySection(it's child component)
    const bodySection = container.querySelector("[className='bodySection']");
    expect(bodySection).toBeInTheDocument();

    // Checks if props are passed correctly to BodySection
    expect(bodySection).toHaveAttribute('prop1', 'Value 1');
    expect(bodySection).toHaveAttribute('prop2', 'Value 2');
  });
  it('renders correctly a <BodySection /> component and the props are passed correctly', () => {
    const props = {
      title: 'Test title',
      prop1: 'Value 1',
      prop2: 'Value 2',
    };

    render(
      <BodySectionWithMarginBottom {...props}>
        <p>Test children node</p>
      </BodySectionWithMarginBottom>
    );
    const bodySection = screen.getByText('News from the School');
    expect(bodySection).toBeInTheDocument();

    // Checks if props are passed correctly to BodySection
    expect(bodySection).toHaveAttribute('Test title');
    expect(bodySection).toHaveAttribute('Value 1');
    expect(bodySection).toHaveAttribute('Value 2');
  });
});
