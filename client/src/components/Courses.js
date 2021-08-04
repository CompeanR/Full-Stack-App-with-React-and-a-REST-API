// Import statements
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Courses extends Component {
    // Create the state that will set the data according to the API response
    state = {
        courses: []
    };
    
    // Mounting data from the API to state
    componentDidMount() {
        axios.get('/api/courses').then(response => {
            this.setState({
                courses: response.data
            });
        })
        // If the request is unsuccessful redirect the user to "error" page
        .catch(err => {
            console.log('Error fetching and parsing data', err);
            this.props.history.push('/error')
        });
    };

    render() {
        return (
            <>                
                <main>
                    <div className="wrap main--grid">

                    {/** Iterates over each course to then render it */}
                    {this.state.courses.map(course => (
                        <Link to={`/courses/${course.id}`} key={course.id} className="course--module course--link" href="course-detail.html">
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>
                        </Link>
                    ))}
                    
                        <Link to={`/courses/create`} className="course--module course--add--module" href="create-course.html">
                            <span className="course--add--title">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                                New Course
                            </span>
                        </Link>
                    </div>
                </main>
            </>
        );
    };
};