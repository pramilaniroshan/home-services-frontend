import React, { useState, useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';
import './style.css'
import Header from '../Header/Header';
import Popup from 'reactjs-popup';
import axios from 'axios';
import authService from '../../Services/auth.service';
import md5 from 'md5';
import ReactStars from "react-rating-stars-component";
import Indlist from '../ShowServiceList/Indlist'
import EditProfile from '../EditProfile'
import 'reactjs-popup/dist/index.css';
import Footer from '../Footer'




export default function index() {


    var user = authService.getCurrentUser();
   
    // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     axios
//           .get('http://localhost:8080/api/service/all')
//           .then(res =>
//              {
//               console.log(res.data);
            
//           })
//           .catch(err =>{
//             console.log('Error from List');
//           })
   
//   },0);
function deleteservice(id){
    id.preventDefault();
    console.log('clicked')
    let user = authService.getCurrentUser();
    axios
    .delete(`vdvdhttp://localhost:8080/api/service/all/${id}`,{
       'x-access-token' : user.accessToken
       
      
    })
    .then(res =>
       {
        console.log(res)
      
    })
    .catch(err =>{
      console.log(err);
    })
  }

      
if(user) {
    var src = `https://www.gravatar.com/avatar/${md5(user.email)}?s=500`;

    return (
        <div>
            <Header />
            <div class="container emp-profile">
            <div class="alert alert-primary" role="alert">
                
  Hi {user.username}, Please Update Your profile For Create a Service
</div>
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                        <img src={src}  alt=""  /> 
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                      Hello 👋  {user.username}
                                    </h5>
                                   
                                    <p class="proile-rating">RATINGS : 4.7
                                    <span>
                                        <ReactStars
                                            count={5}
                                            isHalf = {true}
                                            value ={4.7}
                                            edit ={false}
                                            size={30}
                                            activeColor="#ffd700"
                                        />
                                     </span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        {/* <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> */}
                        <Link to="/editprofile" class="profile-edit-btn">Edit Profile</Link>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            {/* <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/> */}
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.id}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.username}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>0763190416</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Home worker</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <Link to = {"/create-service"} className=" btn btn-primary btn-log-in">Create a new Servicee</Link>
                                        <div class="row">
                                       
                                   
             {/* card 2 */}

             <Indlist />
                                        </div>
                                        
                                <div class="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
   
<Footer />

        </div>
)
}

else{
    return (
        <>
    <Redirect to="/" />
    </>
    )
}
  



    
    
}
