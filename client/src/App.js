import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Courses from './components/Courses'
import CourseDetail from './components/CourseDetail'
import Header from './components/Header'
import UserSignIn from './components/UserSignIn'
import UserSignUp from './components/UserSignUp';

const App = () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Courses} />
        <Route exact path="/courses/:id" component={CourseDetail} />
        <Route exact path="/signin" component={UserSignIn} />
        <Route exact path="/signup" component={UserSignUp} />
      </Switch>

    </div>
  </Router>
)

export default App;
;
  