// Denis Murray
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

// Default marker from package
const LocationPin = ({ text }) => (
    <div >
      <Icon icon="iconoir:gym" className="icon-red" />
      <p className="icon-text">{text}</p>
    </div>
  )

  export default function SimpleMap(){
    const defaultProps = {
      center: {
        lat: 53.372231,
        lng: -6.337470
      },
      zoom: 15
    };
  
    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDH9ZcE62HMuWdR_kO_Iq0LY-dJiWQ0JDk" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <LocationPin
            lat={53.372231}
            lng={-6.337470}
            text={"Project Fitness"}
        />
        </GoogleMapReact>
    );
  }