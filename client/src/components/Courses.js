import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Courses extends Component {
    
    constructor() {
        super();
        this.state = {
            courses: []
        };
    };
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/courses').then(response => {
            this.setState({
                courses: response.data
            });
        })
        .catch(err => {
            console.log('Error fetching and parsing data', err);
        });
    };


    render() {
        console.log(this.state.courses)
        return (
            <>
                {this.state.courses.map(course => (
                    <main key={course.id}>
                        <div className="wrap main--grid" >
                            <Link to={`/api/courses/${course.id}`} className="course--module course--link" href="course-detail.html">
                                <h2 className="course--label">Course</h2>
                                <h3 className="course--title">{course.title}</h3>
                            </Link>
                        </div>
                    </main>
                ))}
            </>
        );
    };
};