import React from 'react';
import { Route } from 'react-router-dom'
import '../styles/App.css'; 
import Navbar from './utils/Navbar'
import Users from './users/Users'
import NewTask from './todos/NewTask'


function App() {
  return (
    <div className="App">
      <Navbar />
        <Route exact path="/" render={() => <h3>Home Screen</h3>} />
        <Route path="/team-members" component={Users} />
        <Route path="/new-task" component={NewTask} />
    </div>
  );
}

export default App;
