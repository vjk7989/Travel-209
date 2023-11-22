import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const redirectToLink = () => {
    window.location.href = 'https://travel-209.vercel.app/product/hyderabad';
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Destination:', destination);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 bg-gradient-to-r from-blue-200 to-blue-400 p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Select your destinations</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Destination:
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={handleDestinationChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="w-1/4">
            <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
              Check-in Date:
            </label>
            <DatePicker
              selected={checkInDate}
              onChange={handleCheckInDateChange}
              dateFormat="MM/dd/yyyy"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="w-1/4">
            <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
              Check-out Date:
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={handleCheckOutDateChange}
              dateFormat="MM/dd/yyyy"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        </div>
        <div>
        <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      onClick={redirectToLink}
    >
      Submit
    </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
