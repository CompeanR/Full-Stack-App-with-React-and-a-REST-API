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
                                <ul>
                                    <li>Welcome, {authUser.firstName} </li>
                                    <li><Link to="/signout">Sign Out</Link></li>
                                </ul>
                            </>
                        :
                            <>
                                <ul className="header--signedout">
                                    <li><Link to="/signup">Sign Up </Link></li>
                                    <li><Link to="/signin">Sign In </Link></li>
                                </ul>
                            </>
                        }
                    </nav>
                </div>
            </header>
        );
    };
};