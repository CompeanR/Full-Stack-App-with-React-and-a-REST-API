import React, { Component } from 'react';
import Form from './Form'

export default class CreateCourse extends Component {
    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    };

    render () {
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        const { title, description, estimatedTime, materialsNeeded, errors } = this.state
    
        return (
            <>
                <main>
                    <div className="wrap">
                        <h2>Create Course</h2>

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

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState(() => {
          return {
            [name]: value
          };
        });
    };
    
    submit = () => {
        const { context } = this.props;
        const authUser = context.authenticatedUser;
        const userId = authUser.userId;

        const { title, description, estimatedTime, materialsNeeded } = this.state;
        const course = { title, description, estimatedTime, materialsNeeded, userId };

        context.data.createCourse(course, authUser.emailAddress, authUser.password)
            .then(errors => {
            if (errors.length) {
                this.setState({ errors });
            } 
            
            else {
                this.props.history.push('/');
            }})

            .catch( err => {
            console.log(err);
            this.props.history.push('/error'); // push to history stack
        });
    };
    
    cancel = () => {
        this.props.history.push('/');
    };
};