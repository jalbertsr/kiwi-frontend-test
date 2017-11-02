import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FlightMap extends Component {
  constructor (props) {
    super(props)
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

    const map = new google.maps.Map(this.flightmap, { zoom: 3, center: this.calulateCenter() })

    flightPath.setMap(map)
  }

  componentDidMount() {
    this.renderFlights()
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
