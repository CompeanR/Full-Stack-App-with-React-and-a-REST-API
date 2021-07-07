import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default class CourseDetail extends Component {
    state = {
        course: [],
        user: []
    };
    
    componentDidMount() {
        axios.get(`http://localhost:5000/api/${this.props.history.location.pathname}`).then(response => {
            this.setState({
                course: response.data,
                user: response.data.user
            });
        })
        .catch(err => {
            console.log('Error fetching and parsing data', err);
        });
    };


    render() {
        console.log(this.props.history.location.pathname)
        console.log(this.state.course)
        return (
            <>
                <header>
                    <div className="wrap header--flex">
                        <h1 className="header--logo"><a href="index.html">Courses</a></h1>
                        <nav>
                            <ul className="header--signedin">
                                <li>{`Welcome, ${this.state.user.firstName} ${this.state.user.lastName}!`}</li>
                                <li><Link to={'/courses/signout'} href="sign-out.html">Sign Out</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                
                <main>
                    <div className="actions--bar">
                        <div className="wrap">
                            <Link to={'/courses/update'} className="button" href="update-course.html">Update Course</Link>
                            <Link to={'/courses/delete'} className="button" href="#">Delete Course</Link>
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
};
