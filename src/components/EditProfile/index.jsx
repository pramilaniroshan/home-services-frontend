import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
// spinner file
import authService from '../../Services/auth.service';
import md5 from 'md5'
import { tsThisType } from '@babel/types';
import { NotificationManager } from 'react-notifications';

let user = authService.getCurrentUser();





class index extends Component {

    
  constructor(props) {
    
    super(props);
    this.state = {
      mobile: 0,
      address:'',
      zipcode:0,
      about_me:'',
      facebook:'',
      skype :'',
    
    };
    
    this.updateprofile = this.updateprofile.bind(this);
  }

 
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd(){
    console.log(this.state.skill_name)
  }

  updateprofile(){
    const data = {
      mobile: this.state.mobile,
      address: this.state.address ,
      zipcode: this.state.zipcode,
      about_me: this.state.about_me,
      facebook: this.state.facebook,
      skype : this.state.skype,

    };

      axios
      .put(`http://localhost:8080/api/test/user/${user.id}`,data)
      .then(res =>
         {
        //localStorage.setItem("zipcode", this.state.zipcode);
        console.log(res.data)
        this.setState({
        mobile: 0,
        address: '' ,
        zipcode: 0,
        about_me: '',
        facebook: '',
        skype : '',
        zipcode : undefined
         
        })

        NotificationManager.success('You have Updated Your Proflie!', 'Successful!', 5000);
        //window.location.href = '/profile'
      })
      .catch(err =>{
        NotificationManager.error('Error while Updating Your Profile!', 'Error!',5000);
        console.log('Error from List');
      })
      console.log(data)
  }
 
  render() {

    
    // let list = this.state.list.map((it,key) => {
    //     return (
    //      <>
    //       <label class="labels">{it}</label><br></br>
    //     </>
    //     )
    //    } );

    if(user){
      let src = `https://www.gravatar.com/avatar/${md5(user.email)}?s=150`;
    return (

      <>
         
         <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
       
        <div class="col-md-3 border-right">
        <Link className="btn" to="/profile">Back</Link>
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={src} /><span class="font-weight-bold"></span><span class="text-black-50"></span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
               
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">PhoneNumber</label><input type="number" name="mobile" class="form-control" placeholder="enter phone number" onChange={this.onChange} value={this.state.mobile} /></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" name="address" class="form-control" placeholder="enter address" onChange={this.onChange} value={this.state.address}/></div>
                    <div class="col-md-12"><label class="labels">Zipcode</label><input type="number" name="zipcode" class="form-control" placeholder="enter zip code" onChange={this.onChange}  value={this.state.zipcode} required/></div>
                    <div class="col-md-12"><label class="labels">About me</label><input type="text-area" name="about_me" class="form-control" placeholder="Little bit about you" onChange={this.onChange} value={this.state.about_me}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Facebook</label><input type="text" name="facebook" class="form-control" placeholder="your profile link" onChange={this.onChange} value={this.state.facebook}/></div>
                    <div class="col-md-6"><label class="labels">Skype</label><input type="text" name="skype" class="form-control" onChange={this.onChange} value={this.state.skype} placeholder="your id"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={this.updateprofile}>Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Add Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus btn btn-primary" onSubmit={()=>this.handleAdd()}><button ></button></i>&nbsp;Experience</span></div><br></br>
                <div class="col-md-12"><input type="text" name="skill_name" class="form-control" placeholder="experience" value={this.state.skill_name}
      onChange={this.handleChange} /></div> <br></br>
                <button class="btn">Delete My Account</button>
                <button class="btn ">Change Password</button>
            </div>
            
        </div>
    </div>
</div>
      
    </>
      
     
    );
    }
  }
};

export default index;