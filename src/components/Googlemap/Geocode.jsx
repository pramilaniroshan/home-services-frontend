
import { GoogleComponent } from 'react-google-location' 

//... 
import React, { Component } from 'react';




const API_KEY = ""  // how to get key - step are below

class Geocode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }

  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={'AIzaSyB7o94wNtXWb34_vsE3I1OLhbA8zYSw-uM'}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          currentCoordinates={{
            "lat": 41.7151377,
            "lng": 44.827096
          }}
          placeholder={'Start typing location'}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>

    )
  } 
}


export default Geocode;

