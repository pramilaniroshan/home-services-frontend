import React, { Component } from 'react';
import axios from 'axios';
import authService from '../../Services/auth.service';
import { NotificationManager } from 'react-notifications';
import {Link,Redirect} from 'react-router-dom'
// spinner file


class Indlist extends Component {

  
    
  constructor(props) {
    super(props);
    this.state = {
      loading: true ,
      service: [],
      searchkey : ''
    };
    
    this.deleteservice = this.deleteservice.bind(this);
    this.pd = this.pd.bind(this);
  }

  componentDidMount() {
    var user = authService.getCurrentUser();
    axios
      .get(`http://localhost:8080/api/service/user/${user.id}`)
      .then(res =>
         {
          console.log(res.data)
        this.setState({
          service: res.data,
          loading: false
         
        })
        
        
      })
      .catch(err =>{
        console.log('Error from List');
      })
  };

  deleteservice(e,id){
    e.preventDefault();
   console.log(id)
    let user = authService.getCurrentUser();
    axios
    .delete(`http://localhost:8080/api/service/all/${id}`,{
       'x-access-token' : user.accessToken 
    })
    .then(res =>
       {
        console.log(res)
        window.location.reload();
        NotificationManager.success('You have Deleted Your Service!', 'Successful!', 5000);
    }
    
    )
    .catch(err =>{
      console.log(err);
    })
  }

  pd(e){
    e.preventDefault();
  }
  render() {
    

    return (

      <>






         
      {this.state.service.map((s, index) => (
       
       <div class="col-sm-6 col-md-5 col-lg-5  mt-4">
       <div class="card">
           <img class="card-img-top" src={s.image} />
           <div class="card-block">
               
               <h4 class="card-title mt-3">{s.title}</h4>
               <div class="meta">
                   <a>{s.category}</a>
               </div>
               <div class="card-text">
             
               </div>
           </div>
           <div class="card-footer">
               <small>Last updated{s.updated_date}</small>
             
               <Link to={`/edit-service/${s._id}`} className="btn btn-secondary float-right btn-sm">Edit</Link>
               
               <button class="btn btn-secondary float-right delete btn-sm" data-toggle="modal" data-target="#exampleModal" onClick={(e) => this.pd(e)} >Delete</button>
              
  
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are Your Sure?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>delete {s.title}</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={(e)=>this.deleteservice(e,s._id)} >Delete</button>
      </div>
    </div>
  </div>
</div>
               
           </div>
       </div>
   </div>

    ))}
    </>
      
     
    );
  }
};

export default Indlist;