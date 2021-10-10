import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/exampleComponent/Loginform';

//Page Route
import addStaffMember from './pages/StaffMenagement/addStaffMember' //--Added by Isuru Pathum Herath--
import allStaffMembers from './pages/StaffMenagement/allStaffMembers' //--Added by Isuru Pathum Herath--
import updateStaffMember from './pages/StaffMenagement/updateStaffMember' //--Added by Isuru Pathum Herath--
import addSalary from './pages/StaffMenagement/addSalaryforStaff' //--Added by Isuru Pathum Herath--
import addQuaratineStaff from './pages/StaffMenagement/addQuaratineStaff' //--Added by Isuru Pathum Herath--
import singleProfile from './pages/StaffMenagement/singleStaffProfile'  //--Added by Isuru Pathum Herath--
import filterStaffMember from './pages/StaffMenagement/filterStaffMember'  //--Added by Isuru Pathum Herath-- | TEMP
import addTask from './pages/StaffMenagement/addTaskStaffMember'  //--Added by Isuru Pathum Herath--
import showEmployeeTask from './pages/StaffMenagement/showEmployeeTasks' //--Added by Isuru Pathum Herath--
import staffAnalytic from './pages/StaffMenagement/StaffAnalytics' //--Added by Isuru Pathum Herath--
import staffLogin from './pages/StaffMenagement/staffLogin' //--Added by Isuru Pathum Herath--
import staffLandingPage from './pages/StaffMenagement/StaffLandingPage' //--Added by Isuru Pathum Herath--
import staffFirstLogin from './pages/StaffMenagement/staffFirstLogin' //--Added by Isuru Pathum Herath--


//pages
import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';

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
              
              <Route path="/addStaffMember" exact component={addStaffMember} />             {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/allStaffMembers" exact component={allStaffMembers} />           {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/updateStaffMember/:id" exact component={updateStaffMember} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/singleProfile/:id" exact component={singleProfile} />           {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/filterStaffMember" exact component={filterStaffMember} />       {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/addSalary" exact component={addSalary} />                       {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/addQuaratineStaff" exact component={addQuaratineStaff} />       {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/addTask" exact component={addTask} />                           {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/showEmployeeTask/:id" exact component={showEmployeeTask} />     {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/staffLogin" exact component={staffLogin} />                     {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/staffLandingPage/:id" exact component={staffLandingPage} />     {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/staffFirstLogin/:id" exact component={staffFirstLogin} />       {/*--Added by Isuru Pathum Herath--*/}

              <Route path="/viewticket" exact component={viewTickets} />
              <Route path="/edit/:id" component={replyTickets} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;