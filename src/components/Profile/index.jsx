import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../Header/Header';
import axios from 'axios';
import authService from '../../Services/auth.service';
import md5 from 'md5';
import ReactStars from "react-rating-stars-component";




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


      
 var src = `https://www.gravatar.com/avatar/${md5(user.email)}?s=500`;
  



    return (
        <div>
            <Header />
            <div class="container emp-profile">
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
                                    <h6>
                                    All plumbing work Fix and replce electronic value and new technology system
                                    </h6>
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
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
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
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <Link to = {"/create-service"} className=" btn btn-primary btn-log-in">Create a new Servicee</Link>
                                        <div class="row">
                                       
                                    {/* card 1 */}
                                        <div class="col-sm-6 col-md-5 col-lg-5  mt-4">
                <div class="card">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random" />
                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt="" />
                        </figure>
                        <h4 class="card-title mt-3">තාප්පයක් අලුත්වැඩියාව</h4>
                        <div class="meta">
                            <a>Friends</a>
                        </div>
                        <div class="card-text">
                        Pramila is a web designer living in Sri lanka.
                        </div>
                    </div>
                    <div class="card-footer">
                        <small>Last updated 3 mins ago</small>
                        <button class="btn btn-secondary float-right btn-sm">Edit</button>
                    </div>
                </div>
            </div>

             {/* card 2 */}

             <div class="col-sm-6 col-md-5 col-lg-5  mt-4">
                <div class="card">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random" />
                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt="" />
                        </figure>
                        <h4 class="card-title mt-3">Plumbing repair work</h4>
                        <div class="meta">
                            <a>Friends</a>
                        </div>
                        <div class="card-text">
                            Pramila is a web designer living in Sri lanka.
                        </div>
                    </div>
                    <div class="card-footer">
                        <small>Last updated 3 mins ago</small>
                        <button class="btn btn-secondary float-right btn-sm">Edit</button>
                    </div>
                </div>
            </div>

                                        </div>
                                        
                                <div class="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
    )
}
