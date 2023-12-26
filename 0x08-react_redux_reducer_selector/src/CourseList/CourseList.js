import React from 'react';
import CourseListRow from './CourseListRow';
import PropType from 'prop-types'; //import prop-types to use the shape here
import CourseShape from './CourseShape'; //the shape createdd
import { StyleSheet, css } from 'aphrodite'; //CSS styling tool

function CourseList({ listCourses = [] }) {
  //Parent component where shape(data type declaration) will be given to the child component's props values(to make sure we are setting the expected data types to the props e.g textafairstCell is expecting a string) and sets condition for how it will be rendered in the Ui
  return (
    <table id='CourseList' className={css(listStyle.textColor)}>
      <thead>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => {
            return (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
              />
            );
          })
        ) : (
          <CourseListRow textFirstCell='No course available yet' />
        )}
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow
          isHeader={true}
          textFirstCell='Course name'
          textSecondCell='Credit'
        />
      </thead>
      <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell='ES6'
          textSecondCell='60'
        />
        <CourseListRow
          isHeader={false}
          textFirstCell='Webpack'
          textSecondCell='20'
        />
        <CourseListRow
          isHeader={false}
          textFirstCell='React'
          textSecondCell='40'
        />
      </tbody>
    </table>
  );
}
CourseList.PropType = {
  //This parent receives the shape created through it's own prop
  listCourses: PropType.arrayOf(CourseShape),
};

const listStyle = StyleSheet.create({
  textColor: {
    color: 'blue',
  },
});

export default CourseList;
