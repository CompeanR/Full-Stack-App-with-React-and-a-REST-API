// Import statements
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component {

  // Create state to sync with user inputs
  state = {
    emailAddress: '',
    password: '',
    errors: [],
  };

  render() {
    // Destructuring state
    const { emailAddress, password, errors, } = this.state;

    return (
        <div className="form--centered">
            <h1>Sign In</h1>

            <Form  cancel={this.cancel} errors={errors} submit={this.submit} submitButtonText="Sign In"
              elements={() => (
                <>
                    <input id="emailAddress" name="emailAddress" type="text" value={emailAddress} onChange={this.change} placeholder="Email Address" />
                    <input id="password" name="password" type="password" value={password} onChange={this.change} placeholder="Password" />                
                </>
              )} >

            </Form>

            <p>
                Don't have a user account? Click here to<Link to="/signup"> sign up</Link>
            </p>
        </div>
    );
  };

  // Method that sync state with user inputs
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  };

  // Method that generates a "GET" request with basic auth parameters
  submit = () => {

    // Destructuring context and state
    const { context } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { emailAddress, password } = this.state;

    // Generates "GET" request
    context.actions.signIn(emailAddress, password)
      .then( user => {
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ]}
          })
        } 
        // If request is successful redirect user to main page
        else {
          this.props.history.push(from);
        }
      })
      // If request is unsuccessful redirect user to "/unhandledError" page
      .catch(err => {
        console.log(err);
        this.props.history.push('/unhandledError');
      })
  }; 

  // Method that redirect user to main page
  cancel = () => {
    this.props.history.push('/');
  };
};
