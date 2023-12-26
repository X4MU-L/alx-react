import React from 'react';
import propTypes from 'prop-types';

const BodySection = ({ title, children }) => {
  return (
    <div className='bodySection'>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

BodySection.propTypes = {
  title: propTypes.string,
  children: propTypes.oneOfType(
    //prop can either be a string, a number or a React element.
    [propTypes.string, propTypes.number, propTypes.element]
  ),
};

export default BodySection;
