// Import statements
import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

// Create the context
const Context = React.createContext(); 

export class Provider extends Component {

  // Our authenticatedUser is defined if the cookie was set.
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  };

  constructor() {
    super();
    this.data = new Data();
  };

  render() {

    // Destructuring the authenticatedUser state
    const { authenticatedUser } = this.state;

    // Create the value of our context
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
      }
    };

    return (
      // Put the Provider on the top of the tree components
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  };

  // Method that signIn the user with their corresponding credentials
  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password);
    if (user !== null) {
      this.setState(() => {
        user.password = password;
        user.emailAddress = emailAddress;
        return {
          authenticatedUser: user
        };
      });
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
    };

    return user;
  };

  // Method that signOut the user eliminating our cookie and the authenticatedUser value
  signOut = () => {
    this.setState(() => {
      return {
        authenticatedUser: null,
      };
    });
    
    Cookies.remove('authenticatedUser');
  };
};

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
};