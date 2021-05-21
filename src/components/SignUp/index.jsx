import React from 'react'
import './style.css'

export default function index() {
    return (
        <div className= "wrapper container-fluid col-md-5">
           <div className= "auth-inner ">
           <div class="row mb-4 md-6 xm-6 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign Up with</h6>
                        <div class="facebook text-center mr-3">
                        <i class="fab fa-facebook fa-2x facebook "></i>
                        </div>
                        <div class="twitter text-center mr-3">
                            <div class="fa fa-twitter"></div>
                            <i class="fab fa-twitter fa-2x"></i>
                        </div>
                        <div class="linkedin text-center mr-3">
                            <div class="fa fa-linkedin"></div>
                            <i class="fab fa-google fa-2x"></i>
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
            <form>
                

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
        </div>
    )
}
