import PropTypes from 'prop-types';

/* Creates a new Shape named 'NotificationItemShape'(to specify the expected structure and data 
    types of an object that is passed as a prop to a React component)containing:

    an id (number, required)
    a html (object of { \_\_html: string })
    a type (string, required)
    a value (string)
*/

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    //A html (object of { \_\_html: string })
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

export default NotificationItemShape;
