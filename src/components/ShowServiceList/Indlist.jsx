import React, { Component } from 'react';
import axios from 'axios';

// spinner file
import authService from '../../Services/auth.service';

class Indlist extends Component {

    
  constructor(props) {
    super(props);
    this.state = {
      loading: true ,
      service: [],
      searchkey : ''
    };
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
               Pramila is a web designer living in Sri lanka.
               </div>
           </div>
           <div class="card-footer">
               <small>Last updated 3 mins ago {s.updated_date}</small>
               <button class="btn btn-secondary float-right btn-sm">Edit</button>
           </div>
       </div>
   </div>

    ))}
    </>
      
     
    );
  }
};

export default Indlist;