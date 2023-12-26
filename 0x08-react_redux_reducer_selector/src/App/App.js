import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications'; //Moving up one level in the directory structure, and then to the absolute path of the file
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut, AppContext } from './AppContext';

class App extends Component {
  // The GrandParent component, that renders all Parent components
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      user: user,
      logOut: logOut,
      displayDrawer: false,
      // isLoggedIn: false, (isLoggedIn is a property of the user object inside AppContext, so i don't need to explicitly add it in state)
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: getLatestNotification() },
      ],
    };
  }
  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter((notifications) => {
      notifications.id !== id;
    });
    this.setState({ listNotifications: newList });
  };

  //when this is used in the child submit handler it will trigger this and isLoggedIn will be set to true, it's starting value is false in the AppContext.js file
  logIn = (email, password) => {
    // this.setState({ user: {email, password, isLoggedIn: true}});
    this.setState((prevState) => ({
      user: {
        email,
        password,
        prevIsLoggedIn: prevState.user.isLoggedIn, //stores prevoius state of isLoggedIn
        isLoggedIn: true,
      },
    }));
  };

  logOut = () => {
    this.setState((previouState) => ({
      user: {
        isLoggedIn: previouState.user.prevIsLoggedIn, //use the stored prevoius state of isLoggedIn to set it back to it's previous state
      },
    }));
  };

  //changes the value of displayDrawer to true
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  //changes the value of displayDrawer back to false.
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  handleKeyDown = (event) => {
    //event handler
    //KeyDown event logic handled here...
    // Checks if Control (Ctrl) key and 'h' key are pressed simultaneously
    if (event && event.ctrlKey && event.key === 'k') {
      // Displays alert and call logOut function.
      alert('Logging you out');
      this.logOut();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown()); //This will listen to the event handler for a key press when a component is mounted.
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown); // remove the event listener when the component is unmounted
  }

  render() {
    const { displayDrawer, user, listNotifications } = this.state; //destructures the state properties, so as to access them directly
    const { logOut } = this.props;

    return (
      <React.Fragment>
        <AppContext.Provider value={{ user, logOut }}>
          {/* Sets the value to the 'user' and 'logOut' function using local state */}
          <div className={css(style.appClass)} data-testid='display-drawer'>
            <Notifications
              handleHideDrawer={this.handleHideDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              displayDrawer={displayDrawer}
              listNotifications={listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>
          <div className='App-body'>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}{' '}
            {/*if isLoggedIn is 'true' render <Login/>, else render <CourseList /> */}
            <BodySection title='News from the School'>
              <p className={css(style.paragraph)}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
            </BodySection>
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

//Property isLoggedIn data type creation and should be false by default
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};
//Aphrodite CSS styling
const style = StyleSheet.create({
  appClass: {
    height: '100vh',
    maxWidth: '100vw',
    fontFamily: 'Arial, Helvetica, poppins',
    boxSizing: 'border-box',
  },
  paragraph: {
    width: '30%',
  },
});

export default App;
