import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FlightMap extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    this.renderFlight()
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  calculateCenter = () => {
    const lat = (this.props.latFrom + this.props.latTo) / 2
    const lng = (this.props.lngFrom + this.props.lngTo) / 2
    return { lat, lng }
  }

  animatePlane = (plane) => {
    let count = 0
    this.intervalId = window.setInterval(() => {
      count = (count + 1) % 200
      const icons = plane.get('icons')
      icons[0].offset = (count / 2) + '%'
      plane.set('icons', icons)
    }, 20)
    this.setState({ intervalId })
  }

  renderFlight = () => {
    const flightPlanCoordinates = [
      { lat: this.props.latFrom, lng: this.props.lngFrom },
      { lat: this.props.latTo, lng: this.props.lngTo }
    ]
    const planeIcon = {
      path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
      fillColor: 'white',
      fillOpacity: 0.8,
      strokeColor: 'black',
      strokeWeight: 1.5,
      strokeOpacity: 1,
      scale: 0.05,
      anchor: new google.maps.Point(340, 0)
    }
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    })

    const planePath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeOpacity: 0,
      strokeWeight: 1,
      zIndex: 1,
      icons: [{
        icon: planeIcon,
        offset: '100%'
      }]
    })

    const map = new google.maps.Map(this.flightmap, { zoom: 3, center: this.calculateCenter() })

    flightPath.setMap(map)
    planePath.setMap(map)
    this.animatePlane(planePath)
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
