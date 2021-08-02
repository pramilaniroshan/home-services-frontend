import React, { Component } from 'react';
import axios from 'axios';
import authService from '../../Services/auth.service';
import {Link} from 'react-router-dom'
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

  deleteservice(id){
   
    let user = authService.getCurrentUser();
    axios
    .delete(`http://localhost:8080/api/service/all/${id}`,{
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
              {  }
               <Link to={`/edit-service/${s._id}`} className="btn btn-secondary float-right btn-sm">Edit</Link>
               <button class="btn btn-secondary float-right delete btn-sm" onClick={this.deleteservice(s._id)}>Delete</button>
           </div>
       </div>
   </div>

    ))}
    </>
      
     
    );
  }
};

export default Indlist;