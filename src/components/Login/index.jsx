import React from 'react'


export default function index() {
    return (
       
      <div className="auth-wrapper">  
       <div className ="auth-inner">
       <div class="row mb-4 md-6 xm-6 px-3">
                        <h6 class="mb-0 mr-4 mt-2 sm-12">Sign in with</h6>
                        <div class="facebook text-center mr-3">
                        <i class="fab fa-facebook fa-2x facebook "></i>
                        </div>
                        <div class="text-center mr-3">
                            
                            <i class="fab fa-twitter fa-2x"></i>
                        </div>
                        <div class="text-center mr-3">
                           
                            <i class="fab fa-google fa-2x"></i>
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
           <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    </div>   
    )
}
