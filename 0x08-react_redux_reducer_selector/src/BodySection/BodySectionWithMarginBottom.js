import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(style.margin)}>
      <BodySection {...props} />
      {/*receives the same set of props that were passed to the parent(with spread operator). This is a way to pass data from Parent to child*/}
    </div>
  );
};

const style = StyleSheet.create({
  margin: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;
