import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import AuthService from '../../Services/auth.service'
import { NotificationManager } from 'react-notifications';
import Loader from "react-loader-spinner";
import Header from '../Header/Header'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview,FilePondPluginFileEncode);


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
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        // 
      });
    }
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

    };

   

    console.log(data.image.getFileEncodeBase64String())
   

    // axios
    //   .post('http://localhost:8080/api/service/all',
    //   data
    //   )
    //   .then(res => {
    //     this.setState({
    //       title: '',
    //       category:'',
    //       user_id:'',
    //       description:'',
    //       published_date:'',
    //       image : ''
          
    //     })
    //     this.props.history.push('/');
    //     NotificationManager.success('You have added a new Service!', 'Successful!', 5000);
    //   })
    //   .catch(err => {
    //     //console.log("Error in CreateService!");
    //     this.setState({loading : false})
    //     NotificationManager.error('Error while Creating new Service!', 'Error!',5000);
    //   })
  };

  render() {
    return (
    <>    
    <Header />
      <div className="CreateService">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show My Service Service List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Service</h1>
              <p className="lead text-center">
                  Create new Service
              </p>

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
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>
                
                
                <div className='form-group'>
                {/* <FileBase64
        multiple={ false }
        onDone={ a =>  this.state.image = a.base64   } /> */}
        <FilePond
        allowMultiple={false}
        allowFileEncode = {true}
        files = {this.state.image}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
                </div>

                <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                />
              </form>
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