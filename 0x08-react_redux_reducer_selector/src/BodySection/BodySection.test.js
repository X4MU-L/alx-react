/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders correctly the children and one h2 element', () => {
    // Render the BodySection with props and children
    const { getByText, getAllByRole } = render(
      <BodySection>
        <p>test children node</p>
      </BodySection>
    );
    // Checks if it renders the child content
    const childContent = getByText('test children node');
    expect(childContent).toBeInTheDocument();
    // Checks if it renders one h2 element
    const h2Element = getAllByRole('heading', { level: 2 });
    expect(h2Element).toHaveTextContent('test title');
  });

  it('render correctly the children and one h2 element', () => {
    const { getByText } = render(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );

    // Checks if it renders one h2 element with the text "Test title"
    const h2Element = getByText('test title');
    expect(h2Element.tagName).toBe('H2');

    // Checks if it renders one p element with the text "Test children node"
    const pElement = getByText('test children node');
    expect(pElement.tagName).toBe('P');
  });
});
