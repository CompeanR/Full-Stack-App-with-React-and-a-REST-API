import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

export default class UpdateCourse extends Component {
    state = {
        user: [],
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    };
    
    componentDidMount() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`).then(response => {
            this.setState({
                user: response.data.user,
                title: response.data.title,
                description: response.data.description,
                estimatedTime: response.data.estimatedTime,
                materialsNeeded: response.data.materialsNeeded
            });
        })
        .catch(err => {
            console.log('Error fetching and parsing data', err);
        });
    };

    render() {
        console.log(this.props)
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

        const { match } = this.props
        const id = match.params.id

        const { title, description, estimatedTime, materialsNeeded } = this.state;
        const course = { title, description, estimatedTime, materialsNeeded, userId };

        context.data.updateCourse(course, authUser.emailAddress, authUser.password, id)
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