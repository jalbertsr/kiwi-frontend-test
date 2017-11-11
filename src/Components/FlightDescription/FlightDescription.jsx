import React from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'
import './FlightDescription.css'

const FlightDescription = ({ price, cityFrom, cityTo, fly_duration, id, bags_price, distance }) =>
  <div>
    <h1>Fly for {price} EUR</h1>
    <hr />
    <strong> Flight Description: </strong>
    <p>From: {cityFrom}</p>
    <p>To: {cityTo}</p>
    <p>Flight duration: {fly_duration} </p>
    <p>Flight ID: {id} </p>
    <hr />
    <div >
      <span>
        <strong>Flight Details: </strong>
        <p> Bags price:</p>
        <ul>
          {Object.keys(bags_price).map((bag, i) =>
            <li key={i}>{`${i + 1} Bag${(i + 1) <= 1 ? '' : 's'} → ${bags_price[i + 1]} EUR`} </li>)}
        </ul>
        <p> Fly Distance: </p>
        {`${distance} Km`}
      </span>
    </div>
    <hr />
  </div>

export default FlightDescription

FlightDescription.propTypes = {
  price: PropTypes.number.isRequired,
  cityFrom: PropTypes.string.isRequired,
  cityTo: PropTypes.string.isRequired,
  fly_duration: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bags_price: PropTypes.array.isRequired,
  distance: PropTypes.number.isRequired
}
