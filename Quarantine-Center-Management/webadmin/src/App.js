import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar'; 

//component
import Login from './components/exampleComponent/Loginform';

//Page Route
import AddStaffMember from './pages/StaffMenagement/addStaffMember'
import AallStaffMembers from './pages/StaffMenagement/allStaffMembers'

//pages
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <div class="page-wrapper">
          <div class="content container-fluid">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/addStaffMember" exact component={AddStaffMember} />
              <Route path="/allStaffMembers" exact component={AallStaffMembers} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;