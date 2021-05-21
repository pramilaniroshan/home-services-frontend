import React, { Component } from "react";
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import AuthService from "./Services/auth.service";
import Home from './components/Landing'
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
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
  
  <Link to={"/"} className="navbar-brand">Smart Homie</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
       
        <Link to={"/"} className="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">All Servies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>

      { showAdminBoard && (
        <li class="nav-item">
        <Link to={"/admin" } className="nav-link" > Dashboard </Link>
      </li>
      )}
      

      {currentUser ?
      (<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
        
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to={"/profile"} className="dropdown-item">My Profile</Link>
        <Link to={"/profile"} className="dropdown-item">Create a Service</Link>
        <Link to={"/profile"} className="dropdown-item">Settings</Link>
          <div class="dropdown-divider"></div>
          <Link to={"/"} className="dropdown-item" onClick={this.logOut}>Log Out</Link>
          
        </div>
      </li> ) 
      :
      (
        <li class="nav-item">
        <Link to={"/login"} className = "nav-link btn btn-primary btn-log-in">Log In</Link>
      </li>
      )
      }
      
      
        
      
      
      
    </ul>
            
  </div>
</nav>

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
