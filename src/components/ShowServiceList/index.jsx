import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ServiceCard from '../Servicecard'
import Loader from "react-loader-spinner";
import slider1 from '../../assets/slider-1.jpg'
import Fuse from 'fuse.js'
// spinner file

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true ,
      service: [],
      searchkey : ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/api/service/all')
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
    const service = this.state.service;
    const loading = this.state.loading;
    // console.log("PrintBook: " + service);

    

    let serviceList;
    

   let s = new Fuse(service,{
      keys: ['title', 'category','name']
    })

    serviceList = s.search(this.state.searchkey)
    console.log(serviceList)

    let serviceFil;

    if(service.length==0) {
      serviceList = <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
       //3 secs
    />;
    } else {
      if (serviceList.length==0) {
        serviceFil = service.map((a, k) =>
        <ServiceCard service={a} key={k}  />
        
      );
       
      } else {
        serviceFil = serviceList.map((a, k) =>
        <ServiceCard service={a.item} key={k}  />
        
      );
      }
    }

    const showserviceList = (
      <div className="row" >
        {serviceFil}
      </div>
    );

    const SPINNER = (
      <div>
        {serviceList}
      </div>
    );

    return (

      

      <div classname="container-fluid">


<div>
            
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={slider1} class="d-block w-100" alt="..." height="500px"/>
            </div>
            <div class="carousel-item">
                <img src={slider1} class="d-block w-100" alt="..." height="500px" width="100px"/>
            </div>
            <div class="carousel-item">
                <img src={slider1} class="d-block w-100" alt="..." height="500px"/>
            </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div className="search-sec" >
    <div class="container">
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-slt" placeholder="Enter Service Name" onChange={ e =>this.setState({ searchkey: e.target.value })} />
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-slt" placeholder="Enter ZIP Code" />
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Category</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            </form> 
            </div>
            
    </div>
    <div classname = "row p-t" >
        
      
          {loading ? SPINNER : showserviceList}

        </div>
    </div>


        
      </div>
     
    );
  }
}

export default index;