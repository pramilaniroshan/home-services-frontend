import GoogleMapReact from 'google-map-react';


import React from 'react'

export default function index({lat,lng}) {
  return (
    <div>
       <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
         
          defaultCenter={{
            lat: lat,
            lng: lng
          }}
          defaultZoom={11}
        >
         
        </GoogleMapReact>
      </div>
    </div>
  )
}
