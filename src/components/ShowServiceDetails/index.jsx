import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer'
import axios from 'axios';
import Googlemap  from '../Googlemap'
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
       //console.log(data.data.place[0].coordinates.lat)
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
    
   //console.log(Service.place.coordinates);
    
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
                    <p><b>Client:</b> CUPCAKE CO</p>
                    <p><b>Date:</b> 14.02.2020</p>
                    <p><b>Designer:</b> James Doe</p>
                    <p><b>Tools:</b> Illustrator</p>
                    <p class="mb-0"><b>Budget:</b> $500</p>
                </div>
    
               
            </div>
    
            <div class="col-md-7">
                {/* <img src={Service.image} alt="project-image" class="rounded" width="80%"/> */}
               {console.log(this.state.lng)}
                <div class="project-info-box">
                <Googlemap lat={this.state.lat} lng={this.state.lng} />
                    <p><b>Categories:</b> Design, Illustration</p>
                    <p><b>Skills:</b> Illustrator</p>
                </div>
                <div class="project-info-box mt-0 mb-0">
                    <p class="mb-0">
                        <span class="fw-bold mr-10 va-middle hide-mobile">Share:</span>
                        <a href="#x" class="btn btn-xs btn-facebook btn-circle btn-icon mr-5 mb-0"><i class="fab fa-facebook-f"></i></a>
                        <a href="#x" class="btn btn-xs btn-twitter btn-circle btn-icon mr-5 mb-0"><i class="fab fa-twitter"></i></a>
                        <a href="#x" class="btn btn-xs btn-pinterest btn-circle btn-icon mr-5 mb-0"><i class="fab fa-pinterest"></i></a>
                        <a href="#x" class="btn btn-xs btn-linkedin btn-circle btn-icon mr-5 mb-0"><i class="fab fa-linkedin-in"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    <Footer />
    </>
    );
  }
}

export default ShowServiceDetails;