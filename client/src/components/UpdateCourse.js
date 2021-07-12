// Import statements
import React, { Component } from 'react';
import Form from './Form';

export default class UpdateCourse extends Component {

    // Create state to manage API response
    state = {
        user: {},
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    };
    
    // Mount state if the request is success
    async componentDidMount() {
        const id = this.props.match.params.id
        const authUser = this.props.context.authenticatedUser
        
        // Generates a "GET" request to the course
        await this.props.context.data.getCourse(id).then(response => {
            this.setState({
                user: response.user,
                title: response.title,
                description: response.description,
                estimatedTime: response.estimatedTime,
                materialsNeeded: response.materialsNeeded
            });

            // If authenticated user id and course id doesn't match, redirect user to "/forbidden" page
            if (authUser.userId !== response.user.id) {
                this.props.history.push('/forbidden')
            };
        })
        // If the request is unsuccessful, redirect user to "/notfound" page
        .catch(err => {
            console.log('Error fetching and parsing data', err);
            this.props.history.push('/notfound')
        });
    };

    render() {
        // Destructuring context and state
        const { user } = this.state
        const { title, description, estimatedTime, materialsNeeded, errors } = this.state

        return (
            <>
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
            // If request is success, redirect user to update course page
            else {
                this.props.history.push(`/courses/${id}`);
            }})
            // If request is unsuccess, redirect user to "/unhandledError" page
            .catch( err => {
            console.log(err);
            this.props.history.push('/unhandledError');
        });
    };
    
    // Method that redirect user to main page
    cancel = () => {
        const id = this.props.match.params.id

        this.props.history.push(`/courses/${id}`);
    };
};