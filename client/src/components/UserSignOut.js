// Import statements
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// Stateless component that clean the cookie and redirect user to main page
const UserSignOut = ({ context }) => {
    useEffect(() => context.actions.signOut())

    return(
        <Redirect to="/" />
    );
};

export default UserSignOut;