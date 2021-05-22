import React, { Component } from "react";
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/SignUp'
import Profile from './components/Profile'
import CreateService from './components/Createservice'
import UpdateServiceInfo from './components/UpdateServiceInfo'
import ShowServiceDetails from './components/ShowServiceDetails'
import Admin from './components/Admin'

// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


class App extends Component {
 // constructor(props) {
    // super(props);
    // this.logOut = this.logOut.bind(this);

    // this.state = {
    //   showModeratorBoard: false,
    //   showAdminBoard: false,
    //   currentUser: undefined,
   // };
  

  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
  //       showAdminBoard: user.roles.includes("ROLE_ADMIN"),
  //     });
  //   }
  // }

  // logOut() {
  //   AuthService.logout();
  //   window.location.reload();
  // }

  render() {
    //const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div className="container-fluid p-0">
        
        
        <div >
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
           
            <Route exact path='/create-service' component={CreateService} />
            <Route exact path='/edit-service/:id' component={UpdateServiceInfo} />
            <Route exact path='/show-service/:id' component={ShowServiceDetails} />
            <Route exact path='/admin' component={Admin} />
            {/* <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
             <NotificationContainer />
          </Switch>
        </div>
       
      </div>
    );
  }
}


export default App;
