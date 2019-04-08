import React from 'react';

const Booking = (props) => {
  return (
    <div>
      <div className="booking">
      <div className="bookingleft">
      <img className="booking1" src="./images/booking.png"></img>
      <div className="bookingText">
      <h3 className="booking2">Private Dining</h3>
      <p className="booking3">Book your next event with us</p>
      </div>
      </div>
      <button className="booking4">View Details</button>
      </div>

    </div>
  )
}

export default Booking;