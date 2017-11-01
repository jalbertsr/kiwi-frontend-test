/* global google */
import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps'

const { compose, withProps, lifecycle } = require('recompose')

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount () {
      const DirectionsService = new google.maps.DirectionsService()
      console.log('LAS PUTAS PROPS', this.props)
      DirectionsService.route({
        origin: new google.maps.LatLng(this.props.latFrom, this.props.lngFrom),
        destination: new google.maps.LatLng(this.props.latTo, this.props.lngTo),
        travelMode: google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          })
        } else {
          console.error(`error fetching directions ${result}`)
        }
      })
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
)

export default MapWithADirectionsRenderer
