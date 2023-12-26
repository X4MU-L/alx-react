import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  //TO DEBUG WHAT THE PROPS ARE RETURNING
  // console.log('type:', type);
  // console.log('html:', html);
  // console.log('value:', value);
  render() {
    const { type, html, value, style, markNotificationAsRead, id } = this.props; //class props declaration
    return (
      <>
        {/* 
            This checks if the props are truthy(if they have values), and if they don't, return null
            NOTE: We are checking just one <li> element but had to split it to give it separate error checks:
                <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}>{value}</li>
            */}
        {type && value ? (
          <li
            className={
              type === 'default'
                ? css(styles.defaultList, styles.smallBorder)
                : css(styles.urgentList, styles.smallBorder)
            }
            onClick={() => markNotificationAsRead(id)}
            data-notification-type={type}
            style={style}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data-testid='Mytest'
            dangerouslySetInnerHTML={{ __html: html }}
            onClick={() => markNotificationAsRead(id)}
          ></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  id: propTypes.number.isRequired,
  html: propTypes.shape({
    //A html (object of { \_\_html: string })
    __html: propTypes.string,
  }),
  type: propTypes.string.isRequired,
  value: propTypes.string,
  markNotificationAsRead: propTypes.func,
  id: propTypes.number,
};
NotificationItem.defaultProps = {
  id: 0,
  markNotificationAsRead: () => {
    console.log('empty function');
  },
};

//Conditionally rendered in the <li> tag
const styles = StyleSheet.create({
  defaultList: {
    color: 'blue',
  },
  urgentList: {
    color: 'red',
  },

  small: {
    '@media (max-width: 900px)': {
      width: '100%',
      // borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px. 8px',
    },
  },
  smallBorder: {
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
    },
  },
});

export default NotificationItem;
