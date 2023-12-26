import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = useState(false);

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  return (
    <>
      <tr
        className={
          isHeader
            ? css(style.defaultRow)
            : css(style.headerRow, checked ? style.rowChecked : '')
        }
      >
        {isHeader ? (
          textSecondCell === null ? (
            <>
              <th colSpan='2'>{textFirstCell}</th>
            </>
          ) : (
            <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
          )
        ) : (
          <>
            <td>
              {textFirstCell}
              <input
                onChange={handleCheckBox}
                type='checkbox'
                checked={checked}
              />
            </td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    </>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    //ensures property 'textSecondCell' can accept either a string or number.
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const style = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
