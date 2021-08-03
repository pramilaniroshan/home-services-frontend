import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import AuthService from '../../Services/auth.service'
import { NotificationManager } from 'react-notifications';
import Loader from "react-loader-spinner";
import Header from '../Header/Header'
import { GoogleComponent } from 'react-google-location' 
require('dotenv').config();



const API_KEY = "AIzaSyB7o94wNtXWb34_vsE3I1OLhbA8zYSw-uM"

class index extends Component {
  
  constructor() {
    super();
    this.state = {
      title: '',
      category:'',
      user_id:'',
      description:'',
      published_date:'',
      image :'',
      loading : false,
      currentUser: undefined,
      place: null,
      cor : [],
      service_provider : '',
      budget : 0,
      url : ''
    };
    
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
   let url = window.location.href.split("/");

    console.log(url[4])
    if (user) {
      this.setState({
        currentUser: user,
        url : url[4]
        // 
      });
    }

    let clodinary = window.cloudinary.applyUploadWidget(document.getElementById('opener'), 
  { cloudName: "dzn94tpjd", uploadPreset: "mhkisyrj" }, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          this.state.image = result.info.url;
        }
      });

      axios
      .get(`http://localhost:8080/api/service/all/${this.state.url}`)
      .then(res => {
        let data = res;
       console.log(res.data[0].title)
       // console.log("Print-showServiceDetails-API-response: " + res.place[0].coordinates);
        this.setState({
          title: res.data[0].title,
          category: res.data[0].category,
        description: res.data[0].description,
        published_date: res.data[0].published_date,
        image : res.data[0].image,
        service_provider : res.data[0].service_provider,
        budget : res.data[0].budget,
        
        })
      })
      .catch(err => {
        console.log("Error from ShowServiceDetails");
      })

  }
 
  onChange = e => {
    
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({loading : true});

    const data = {
      title: this.state.title,
      category: this.state.category,
      user_id: this.state.currentUser.id,
      description: this.state.description,
      published_date: this.state.published_date,
      image : this.state.image,
      place : this.state.place,
      zipcode : this.state.currentUser.zipcode,
      service_provider : this.state.currentUser.username,
      budget : this.state.budget,
      mobile : this.state.currentUser.mobile,
      skype : this.state.currentUser.skype,
      facebook : this.state.currentUser.facebook,

    };

   

    console.log(data);
   
   
    axios
      .put(`http://localhost:8080/api/service/all/${this.state.url}`,
      data
      )
      .then(res => {
        this.setState({
          title: '',
          category:'',
          user_id:'',
          description:'',
          published_date:'',
          image : '',
          place : [],
          service_provider : '',
          budget : undefined
          
        })
        this.props.history.push('/');
        NotificationManager.success('You have Updated Your Service!', 'Successful!', 5000);
      })
      .catch(err => {
        //console.log("Error in CreateService!");
        this.setState({loading : false})
        NotificationManager.error('Error while Updating Service!', 'Error!',5000);
      })
  };

  render() {

    // let myWidget = window.cloudinary.createUploadWidget({
    //   cloudName: 'dzn94tpjd', 
    //   uploadPreset: 'mhkisyrj'}, (error, result) => { 
    //     if (!error && result && result.event === "success") { 
    //       console.log('Done! Here is the image info: ', result.info); 
    //     }
    //   }
    // );

   

    return (
    <>    
    <Header />

    
      <div className="CreateService">
        <div className="container jumbotron">
          <div className="row">
            <div className="col-md-6 m-auto">
              <br />
              <br />
              
              {/* <Link to="/profile" className="btn btn-primary float-left">
                  Show My Service Service List
              </Link> */}
            </div>
           
            <div className="col-md-8 m-auto">
            {/* <Link to="/profile" className="btn btn-primary float-left">
                  Show My Service Service List
              </Link> */}
            <div class="alert alert-warning" role="alert">

 {this.state.title}
</div>

              <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'si'}
          country={'country:LK'}
          coordinates={true}
          currentCoordinates={{
            "lat": 41.7151377,
            "lng": 44.827096
          }}
          placeholder={'Start typing location'}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e })} } />
      </div>


              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Service'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='category'
                    name='category'
                    className='form-control'
                    value={this.state.category}
                    onChange={this.onChange}
                  />
                </div>

               

                <div className='form-group'>
                <textarea
                    placeholder='Describe this Service'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Price'
                    name='budget'
                    className='form-control'
                    value={this.state.budget}
                    onChange={this.onChange}
                  />
                </div>

                
                
                {console.log(this.state.place)}
                <div className='form-group'>
                <button  id="opener" className="btn" onChange={this.onChange}>Upload</button>
                {/* <FileBase64
        multiple={ false }
        onDone={ a =>  this.state.image = a.base64   } /> */}
        {/* <FilePond
        allowMultiple={false}
        allowFileEncode = {true}
        files = {this.state.image}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      /> */}
      
          
                </div>

                <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                    value="Update"
                />
              </form>
              
          </div>
          <div class="card" style={{width:"18rem"}}>
  <img class="card-img-top" src={this.state.image} alt="Card image cap" />
  <div class="card-body">
    
  </div>
</div>
          {this.state.loading && 
        <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={100000} //3 secs
      />}
          
        
          </div>
          
        </div>
      </div>
    </>
    );
  }
}

export default index;