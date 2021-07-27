import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import authService from '../../Services/auth.service';
import md5 from 'md5';
import avatar from '../../assets/avatar.png'

export default function index(props) {

    var user = authService.getCurrentUser();
    if(user){
    var avatar = `https://www.gravatar.com/avatar/${md5(user.email)}?s=500`;
    }
    const service = props.service;
 let link =`/show-service/${service._id}`
 console.log(service)
    return (
        
    
  
  
        <div class="col-md-4 col-lg-4 card3">
            <div class="card shadow-sm border-light mb-4">
                <a href="#" class="position-relative">
                    <img src={service.image} class="card-img-top" alt="image" /> </a>
                <div class="card-body">
                    <a href="#">
                        <h5 class="font-weight-normal"><Link to={link}> {service.title}</Link></h5>
                    </a>
                    <div class="post-meta"><span class="small lh-120"><i class="fas fa-map-marker-alt mr-2"></i>{props.place}</span></div>
                    <div class="d-flex my-4">
                        <i class="star fas fa-star text-warning"></i>
                        <i class="star fas fa-star text-warning"></i>
                        <i class="star fas fa-star text-warning"></i>
                        <i class="star fas fa-star text-warning"></i>
                        <i class="star fas fa-star text-warning"></i> <span class="badge badge-pill badge-secondary ml-2">5.0</span></div>
                    <div class="d-flex justify-content-between">
                        <div class="col pl-0"><span class="text-muted font-small d-block mb-2">Monthly</span> <span class="h5 text-dark font-weight-bold">3500$</span></div>
                        <div class="col"><span class="text-muted font-small d-block mb-2">Seats</span> <span class="h5 text-dark font-weight-bold">10</span></div>
                        <div class="col pr-0"><span class="text-muted font-small d-block mb-2">Sq.Ft</span> <span class="h5 text-dark font-weight-bold">1500</span></div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    )
}
