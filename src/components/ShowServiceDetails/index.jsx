import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer'
import axios from 'axios';
import Googlemap  from '../Googlemap'
import ReactStars from "react-rating-stars-component";

class ShowServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Service: [],
      lat : 0,
      lng : 0
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8080/api/service/all/'+this.props.match.params.id)
      .then(res => {
        let data = res;
       console.log(res.data)
       // console.log("Print-showServiceDetails-API-response: " + res.place[0].coordinates);
        this.setState({
          Service: res.data,
          lat : data.data.place[0].coordinates.lat,
          lng : data.data.place[0].coordinates.lng
        })
      })
      .catch(err => {
        console.log("Error from ShowServiceDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8000/api/service/all/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowServiceDetails_deleteClick");
      })
  };


  render() {

    const Service = this.state.Service;
    let date = Date(this.state.Service.updated_date);

    
    return (
    <>
    <Header />
        <div class="container service-container">
        <div class="row">
           
            <div class="col-md-5">
                <div class="project-info-box mt-0">
                    <h5><b>{Service.title}</b></h5>
                    <p class="mb-0">{Service.description}</p>
                </div>
    
                <div class="project-info-box">
                    <p><b>Service Provider:</b> {this.state.Service.service_provider}
                    <ReactStars
                                            count={5}
                                            isHalf = {true}
                                            value ={4.7}
                                            edit ={true}
                                            size={30}
                                            activeColor="#ffd700"
                                        />
                                         <button class="btn btn-primary">Contact Service Provider </button>
                    </p>
                    <button> </button>
                    <p><b>Updated Date:</b> {date}</p>
                    <p><b>Zipcode:</b> {this.state.Service.zipcode}</p>
                    <p><b>Skills:</b> </p>
                    <p><b>Price:</b> ₨ {Service.budget} per day</p>
                    <p class="mb-0">
                        {/* <a href="#x" class="btn btn-xs btn-facebook btn-circle btn-icon mr-5 mb-0"><i class="fab fa-facebook-f"></i></a>
                        <a href="#x" class="btn btn-xs btn-twitter btn-circle btn-icon mr-5 mb-0"><i class="fab fa-skype"></i></a>
                        <a href="#x" class="btn btn-xs btn-pinterest btn-circle btn-icon mr-5 mb-0"><i class="fa fa-mobile"></i></a>
                        <a href="#x" class="btn btn-xs btn-linkedin btn-circle btn-icon mr-5 mb-0"><i class="fab fa-linkedin-in"></i></a> */}
                     <a href={Service.facebook} target="_blank" > <i class="fab fa-facebook-f pr-4 fa-2x" style={{color:"#3C5B99"}}></i></a> 
                        <i class="fab fa-whatsapp pr-4 fa-2x" style={{color:"#128C7E"}}></i>
                        <i class="fab fa-skype pr-4 fa-2x" style={{color:"#00AAE8"}} ></i>
                    </p>
                </div>
    
               
            </div>
    
            <div class="col-md-7">
                {/* <img src={Service.image} alt="project-image" class="rounded" width="80%"/> */}
               
                <div class="project-info-box">
                  {/* <img src={this.state.Service.image} /> */}
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={this.state.Service.image} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.Service.image} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.Service.image} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                </div>
                
            </div>
            
        </div>
        <div class="project-info-box">
                <Googlemap lat={this.state.lat} lng={this.state.lng} />
                </div>
    </div>
    <Footer />
    </>
    );
  }
}

export default ShowServiceDetails;