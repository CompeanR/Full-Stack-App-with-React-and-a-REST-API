// Import statements
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
  
  // Create state that sync with user inputs
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    errors: [],
  }

  render() {

    // Destructuring state
    const { firstName, lastName, emailAddress, password, confirmPassword, errors, } = this.state;

    return (
        <div className="form--centered">
          <h1>Sign Up</h1>

          <Form  cancel={this.cancel} errors={errors} submit={this.submit} submitButtonText="Sign Up"
            elements={() => (
              <>
                <input id="firstName" name="firstName" type="text" value={firstName} onChange={this.change} placeholder="Name" />
                <input id="lastName" name="lastName" type="text" value={lastName} onChange={this.change} placeholder="Last Name" />
                <input id="emailAddress" name="emailAddress" type="email" value={emailAddress} onChange={this.change} placeholder="Email Address" />
                <input id="password" name="password" type="password" value={password} onChange={this.change} placeholder="Password" />
                <input  id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={this.change} placeholder="Confirm Password" />
              </>
            )} >
          </Form>
          
          <p>
              Already have a user account? Click here to <Link to="/signin">sign in!</Link>
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

  // Method that generates a "POST" request and if success creates a new user
  submit = () => {

    // Destructuring context
    const { context } = this.props;

    // Destructuring state
    const { firstName, lastName, emailAddress, password, confirmPassword } = this.state;
    const user = { firstName, lastName, emailAddress, password, confirmPassword };

    // Generates "POST" request
    context.data.createUser(user)
      .then(errors => {
        if (errors.length) {
          this.setState({ errors });
        } 
        // If request is successful sign in the user and redirect them to main page
        else {
          context.actions.signIn(emailAddress, password)
            .then(() => {
              this.props.history.push('/');
            })
        }
      })
      // If request is unsuccessful redirect user to "/unhandledError" page
      .catch( err => {
        console.log(err);
        this.props.history.push('/error'); 
      })
  };

  // Method that redirect user to main page
  cancel = () => {
    this.props.history.push('/');
  };
};
