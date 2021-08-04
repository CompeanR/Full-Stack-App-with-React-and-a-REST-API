// Import statements
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default class CourseDetail extends Component {

    // Create the state to then set the data
    state = {
        course: [],
        user: [],
        errors: []
    };
    
    // Mounting data from the API to state
    componentDidMount() {
        axios.get(`/api/courses/${this.props.match.params.id}`).then(response => {
            this.setState({
                course: response.data,
                user: response.data.user
            });
        })
        // If the request is unsuccessful and the user is authenticated redirect them to "notfound" page
        .catch(err => {
            if (this.props.context.authenticatedUser) {
                console.log('Error fetching and parsing data', err);
                this.props.history.push('/notfound')
            }
        });
    };

    render() {
        // Destructuring context from props
        const { context } = this.props

        return (
            <>
                <main>
                    <div className="actions--bar">
                        <div className="wrap">
                         {/** If the user is authenticated and the userId match with courseId, render "Delete" and "Update" buttons */}
                            {
                                context.authenticatedUser ? (
                                    
                                    context.authenticatedUser.userId === this.state.user.id && (
                                        <>
                                            <Link to={`/courses/${this.props.match.params.id}/update`} className="button" href="update-course.html">Update Course</Link>
                                            <button className="button" href="#" onClick={() => this.delete()}>Delete Course</button>
                                        </>
                                    )  
                                        
                                ) : <></>
                            }

                         {/** If the user is not authenticated just render the "Return to List" button */}
                            <Link to={'/'} className="button button-secondary" href="index.html">Return to List</Link>
                        </div>
                    </div>
                    
                    <div className="wrap">
                        <h2>Course Detail</h2>
                        <form>
                            <div className="main--flex">
                                <div>
                                    <h3 className="course--detail--title">Course</h3>
                                    <h4 className="course--name">{this.state.course.title}</h4>
                                    <p>{`${this.state.user.firstName} ${this.state.user.lastName}`}</p>

                                    <ReactMarkdown>{`${this.state.course.description}`}</ReactMarkdown>
                                </div>
                                
                                <div>
                                    <h3 className="course--detail--title">Estimated Time</h3>
                                    <p>{this.state.course.estimatedTime}</p>

                                    <h3 className="course--detail--title">Materials Needed</h3>
                                    <ul className="course--detail--list">
                                        <ReactMarkdown>{this.state.course.materialsNeeded}</ReactMarkdown>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </>
        );
    };

    // Method that delete a course from the list
    delete = () => {

        // Destructuring context and authenticatedUser
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        const id = this.state.course.id

        // Generates a "DELETE" request to the API that deletes a course if success
        context.data.deleteCourse(authUser.emailAddress, authUser.password, id)
            .then(errors => {
                if (errors.length) {
                    this.setState({ errors });
                }
                // If the request is success redirect the user to main page
                else {
                    this.props.history.push('/');
                }
            })
            // If the request is unsuccess redirect the user to error page
            .catch(err => {
                console.log(err);
                this.props.history.push('/error')
            });
    };
};
