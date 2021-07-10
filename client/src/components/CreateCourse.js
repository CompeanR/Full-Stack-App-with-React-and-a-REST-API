// Import components
import React, { Component } from 'react';
import Form from './Form'

export default class CreateCourse extends Component {

    // Create state for receive the inputs value of the form
    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    };

    render () {
        // Destructuring context and state
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        const { title, description, estimatedTime, materialsNeeded, errors } = this.state
    
        return (
            <>
                <main>
                    <div className="wrap">
                        <h2>Create Course</h2>

                        {/** Form component that generates the form with render props */}
                        <Form cancel={this.cancel} errors={errors} submit={this.submit} submitButtonText="Create Course" 
                            elements={() => (
                                <div className="main--flex">
                                    <div>
                                        <label htmlFor="courseTitle">Course Title</label>
                                        <input id="title" name="title" type="text" value={title} onChange={this.change} />

                                        <p>{authUser.firstName} {authUser.lastName}</p>

                                        <label htmlFor="courseDescription">Course Description</label>
                                        <textarea id="description" name="description" type="text" onChange={this.change} value={description} />
                                    </div>

                                    <div>
                                        <label htmlFor="estimatedTime">Estimated Time</label>
                                        <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={this.change} />

                                        <label htmlFor="materialsNeeded">Materials Needed</label>
                                        <textarea id="materialsNeeded" name="materialsNeeded" type="text" onChange={this.change} value={materialsNeeded} />
                                    </div>
                                </div>
                            )}>
                        </Form>
                        
                    </div>
                </main>
            </>
        );
    };
    // Method that set the inputs into state
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
    };
    
    // Method that generates a "POST" request to create the new course
    submit = () => {

        // Destructuring Context
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        const userId = authUser.userId;

        // Destructuring State
        const { title, description, estimatedTime, materialsNeeded } = this.state;
        const course = { title, description, estimatedTime, materialsNeeded, userId };

        // Generates "POST" request
        context.data.createCourse(course, authUser.emailAddress, authUser.password)
            .then(errors => {
            if (errors.length) {
                this.setState({ errors });
            } 
            // If request is success redirect user to main page
            else {
                this.props.history.push('/');
            }})
            // If request is unsuccess redirect user to error page
            .catch( err => {
            console.log(err);
            this.props.history.push('/error'); // push to history stack
        });
    };
    
    // Method that redirect user to main page
    cancel = () => {
        this.props.history.push('/');
    };
};