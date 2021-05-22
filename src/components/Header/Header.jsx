import React, { Component } from "react";
import {Link} from 'react-router-dom'
import AuthService from '../../Services/auth.service'
import './css.css'

class Header extends Component {
  
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
    window.location.reload();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

  
  
    return (
        <>

<div class="dashboard-header">
    <nav class="navbar navbar-expand-lg bg-white fixed-top collapse navbar-collapse" > <a class="navbar-brand" href="#">Smart Home</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbar-right-top">
            
            <li class="nav-item">
                    <div id="custom-search" class="top-search-bar"> <input class="form-control" type="text" placeholder="Search.." /> </div>
                </li>
        
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
     
     {currentUser && (

<li class="nav-item dropdown connection"> <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-fw fa-th"></i> </a>
<ul class="dropdown-menu dropdown-menu-right connection-dropdown">
    <li class="connection-list">
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "> <a href="#" class="connection-item"><img src="https://img.icons8.com/nolan/100/000000/github.png" alt="" /> <span>Github</span></a> </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "> <a href="#" class="connection-item"><img src="https://img.icons8.com/color/100/000000/dribbble.png" alt="" /> <span>Dribbble</span></a> </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "> <a href="#" class="connection-item"><img src="https://img.icons8.com/color/100/000000/dropbox.png" alt="" /> <span>Dropbox</span></a> </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "> <a href="#" class="connection-item"><img src="https://img.icons8.com/color/100/000000/bitbucket.png" alt="" /> <span>Bitbucket</span></a> </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "> <a href="#" class="connection-item"><img src="https://img.icons8.com/color/100/000000/remove-ads.png" alt="" /><span>Facebook ads</span></a> </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 "> <a href="#" class="connection-item"><img src="https://img.icons8.com/wired/64/000000/slack.png" alt="" /> <span>Slack</span></a> </div>
        </div>
    </li>
    <li>
        <div class="conntection-footer"><a href="#">More</a></div>
    </li>
</ul>
</li>


     )}
     
     {currentUser ?
     ( 
      <li class="nav-item dropdown nav-user"> <a class="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="https://img.icons8.com/dusk/100/000000/user-female-circle.png" alt="" class="user-avatar-md rounded-circle" /></a>
      <div class="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
          <div class="nav-user-info">
              <h5 class="mb-0 text-white nav-user-name">{this.state.currentUser.username}</h5> <span class="status"></span><span class="ml-2">Available</span>
          </div> 
          <Link to={"/profile"} class="dropdown-item" ><i class="fas fa-user mr-2"></i>Account</Link>
          <Link to={"/profile"} class="dropdown-item" ><i class="fas fa-cog mr-2"></i>Setting</Link>
          <Link to={"/"} class="dropdown-item" onClick={this.logOut} ><i class="fas fa-power-off mr-2"></i>Logout</Link>
          
      </div>
  </li>
     ) 
     :
     (
       <li class="nav-item">
       
       <Link to = {"/register"} className="nav-link btn btn-primary btn-log-in">Get Started</Link>
     </li>
     )
     }
     
                
                
                
                
                
            </ul>
        </div>
    </nav>
</div>




       </>
        
    )
}

}

export default Header;
