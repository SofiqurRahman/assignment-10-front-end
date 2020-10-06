import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "../navbar.component"
import ExercisesList from "../exercises-list.component";
import EditExercise from "../edit-exercise.component";
import CreateExercise from "../create-exercise.component";
import CreateUser from "../create-user.component";

const Database = () => {
  return (
    <div class="container">
      <Router>
      <Navbar />
        <Switch>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
        </Switch>
    </Router>
    
    </div>
  );
};

export default Database;