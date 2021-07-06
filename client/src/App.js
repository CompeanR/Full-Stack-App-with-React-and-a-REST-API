import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Courses from './components/Courses'
import CourseDetail from './components/CourseDetail'
import Header from './components/Header'

const App = () => (
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={Courses} />
        <Route exact path="/courses/:id" component={CourseDetail} />
      </Switch>
      
    </div>
  </Router>
)

export default App;
;
  