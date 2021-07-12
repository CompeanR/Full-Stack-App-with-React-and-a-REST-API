// Import statements
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        // Destructuring context
        const { context } = this.props;
        const authUser = context.authenticatedUser;

        return(
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo"><Link to={'/'} href="index.html">Courses</Link></h1>
                    <nav>
                        {/** If user is sign in switch the header */}
                        {   
                            authUser ?
                            <>
                                <span className="header--signedin">Welcome, {authUser.firstName}</span>
                                <Link to="/signout"> Sign Out</Link>
                            </>
                        :
                            <>

                                <Link to="/signup">Sign Up </Link>
                                <Link to="/signin">Sign In </Link>

                            </>
                        }
                    </nav>
                </div>
            </header>
        );
    };
};