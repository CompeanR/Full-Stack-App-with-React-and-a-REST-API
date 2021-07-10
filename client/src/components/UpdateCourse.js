// Import statements
import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import { Redirect } from 'react-router';

export default class UpdateCourse extends Component {

    // Variable that help us to unmount the data
    isMounted = false;
    
    // Create state to manage API response
    state = {
        user: [],
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    };
    
    // Mount state if the request is success
    componentDidMount() {
        this.isMounted = true;
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`).then(response => {
            this.setState({
                user: response.data.user,
                title: response.data.title,
                description: response.data.description,
                estimatedTime: response.data.estimatedTime,
                materialsNeeded: response.data.materialsNeeded
            });
        })
        // If the request is unsuccessful, redirect user to "/notfound" page
        .catch(err => {
            console.log('Error fetching and parsing data', err);
            this.props.history.push('/notfound')
        });
    };

    // Unmount state when user is redirect to "/notfound" page
    componentWillUnmount() {
        this.isMounted = false;
    };
    
    render() {
        // Destructuring context and state
        const { user } = this.state
        const { title, description, estimatedTime, materialsNeeded, errors } = this.state
        const { context } = this.props

        return (
            <>
            {/** If the userId and courseId match, let user update the course */}
                {
                    context.authenticatedUser.id === this.state.user.id && (
                        <main>
                            <div className="wrap">
                                <h2>Update Course</h2>

                                <Form cancel={this.cancel} errors={errors} submit={this.submit} submitButtonText="Update Course" 
                                    elements={() => (
                                        <div className="main--flex">
                                            <div>
                                                <label htmlFor="courseTitle">Course Title</label>
                                                <input id="title" name="title" type="text" value={title} onChange={this.change} />

                                                <p>{user.firstName} {user.lastName}</p>

                                                <label htmlFor="courseDescription">Course Description</label>
                                                <textarea id="description" name="description" value={description} onChange={this.change}></textarea>
                                            </div>

                                            <div>
                                                <label htmlFor="estimatedTime">Estimated Time</label>
                                                <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={this.change} />

                                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                                <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={this.change}></textarea>
                                            </div>
                                        </div>
                                    )}>
                                </Form> 

                            </div>
                        </main>
                    )
                }

            {/** If the userId and courseId doesn't match, redirect user to "/forbidden" page */}
                <Redirect to={{ pathname: '/forbidden' }} />
            </>
        );
    };

    // Method that sync inputs with state
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
    };

    // Method that generates a "PUT" request and update the course
    submit = () => {

        // Destructuring context
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        const userId = authUser.userId;

        // Destructuring course id
        const { match } = this.props
        const id = match.params.id

        // Destructuring state
        const { title, description, estimatedTime, materialsNeeded } = this.state;
        const course = { title, description, estimatedTime, materialsNeeded, userId };

        // Generates "PUT" request to the API and update course if success
        context.data.updateCourse(course, authUser.emailAddress, authUser.password, id)
            .then(errors => {
            if (errors.length) {
                this.setState({ errors });
            } 
            // If request is success, redirect user to main page
            else {
                this.props.history.push('/');
            }})
            // If request is unsuccess, redirect user to "/unhandledError" page
            .catch( err => {
            console.log(err);
            this.props.history.push('/unhandledError');
        });
    };
    
    // Method that redirect user to main page
    cancel = () => {
        this.props.history.push('/');
    };
};