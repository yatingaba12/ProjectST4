//
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 30.516742714650743,
  lng: 76.65901605030191
};



function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBILjToRvUpusBZxpYGdvxiUr3DegwJmMk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MyComponent