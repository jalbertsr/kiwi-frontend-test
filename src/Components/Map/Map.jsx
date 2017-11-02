/* global google */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GoogleApiWrapper } from 'google-maps-react'
import { Marker } from 'react-google-maps'

class FlightMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  calulateCenter = () => {
    const lat = (this.props.latFrom + this.props.latTo) / 2
    const lng = (this.props.lngFrom + this.props.lngTo) / 2
    return { lat, lng }
  }

  renderFlights = () => {
    const google = window.google
    const flightPlanCoordinates = [
      { lat: this.props.latFrom, lng: this.props.lngFrom },
      { lat: this.props.latTo, lng: this.props.lngTo }
    ]
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    })

    const map = new google.maps.Map(this.flightmap, { zoom: 4, center: this.calulateCenter() })

    flightPath.setMap(map)
  }

  componentDidMount() {
    setTimeout(() => {
      this.renderFlights()
      this.setState({loaded: true})
    }, 500)
  }

  render () {
    return (
      <div style={{ height: `400px`, width: `400px`}} ref={(flightmap) => { this.flightmap = flightmap }}></div>
    )
  }
}

export default FlightMap

FlightMap.propTypes = {
  latFrom: PropTypes.number.isRequired,
  lngFrom: PropTypes.number.isRequired,
  latTo: PropTypes.number.isRequired,
  lngTo: PropTypes.number.isRequired
}
