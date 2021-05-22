import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import error from '../../assets/error.gif'

export default function index() {
    return (
<  div class=" vertical-center">
    <div className="container">
    <div class="row text-center">
        <div class="col-md-12">
            <div class="error-template">
            <img src={error} className="img-fluid img-thumbnail"></img>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <Link to={"/"} class="btn btn-primary btn-lg"><i class="fas fa-home mr-2"></i>Take Me Home</Link> 
                    <Link to={"/"} class="btn btn-primary btn-lg"><i class="fas fa-phone mr-2"></i>Contact Support</Link> 
                        
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}
