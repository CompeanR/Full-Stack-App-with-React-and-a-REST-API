import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const CourseDetail = () => {
    const [course, setCourse] = useState({});
    const [user, setUser] = useState({});
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${history.params.id}`)
        .then(response => {
            setCourse(response.data),
            setUser(response.data.User)
        })
        .catch(errors => {
            console.log('Course ID not found', errors);
            history.push('/notfound')
        })
    })

    return(
        <>
            <div className="actions--bar">
                <div className="wrap">
                    {
                        //if the user is authorized, display "Update", "Delete", and "Return to List" buttons
                        authUser
                    ?
                        ((authUser.userId === user.id) ? (
                    <React.Fragment>
                        <Link className="button" to={`/courses/${course.id}/update`}> Update Course </Link>
                        <Link className="button" to="/" onClick={() => deleteCourse()}> Delete Course </Link>
                        <Link className="button button-secondary" to="/"> Return to List </Link>
                    </React.Fragment>
                    )
                    // if user is not authorized, display only "Back" button
                    :
                    <React.Fragment>
                        <Link className="button" to="/"> Return to List </Link>
                    </React.Fragment> ) : <React.Fragment>
                        <Link className="button" to="/"> Return to List </Link>
                    </React.Fragment> 
                    }
                </div>
            </div>
            <div className="wrap">
                <h2> Course Detail </h2>
                <form>
                <div className="main--flex">
                <div>
                    <h3 className="course--detail--title" >Course</h3>
                    <h4 className="course--name">{course.title}</h4>
                    <p> By {user.firstName} {user.lastName} </p>
                    <ReactMarkdown children={course.description}/>
                    </div>
                    <div>
                    <h3 className="course--detail--title"> Estimated Time </h3>
                    {
                        (course.estimatedTime === null || course.estimatedTime === '')
                    ?
                    <p> N/A </p>
                    :
                    <p> {course.estimatedTime} </p>
                    }
                    <h3 className="course--detail--title"> Materials Needed </h3>
                    {
                        (course.materialsNeeded === null || course.materialsNeeded === '')
                    ?
                    <p> N/A </p>
                    :
                    <ReactMarkdown children={course.materialsNeeded}/>
                    }
                </div>
                </div>
                </form>
            </div>
        </>
    )
}

const deleteCourse = () => {
    const {context} = this.props;
    const authUser = context.authenticatedUser;
    const id = this.props.match.params.id;
    context.data.deleteCourse(id, authUser.emailAddress, authUser.password)
    .then(errors => {
        if(errors.length){
            this.setState({errors})
        } else {
            console.log('Hooray! Course deleted.');
            this.props.history.push('/');
            window.location.reload(true); // returns user to Course list page
        }
    })
    .catch(error => {
        console.log(error);
        this.props.history.push('/error'); // sends user to "Error" page
    })
}

export default CourseDetail