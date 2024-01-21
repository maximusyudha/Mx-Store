// src/components/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      city: '',
      street: '',
      number: '',
      zipcode: '',
      lat: '',
      long: '',
      phone: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            username: formData.username,
            password: formData.password,
            name: {
              firstname: formData.firstName,
              lastname: formData.lastName,
            },
            address: {
              city: formData.city,
              street: formData.street,
              number: formData.number,
              zipcode: formData.zipcode,
              geolocation: {
                lat: formData.lat,
                long: formData.long,
              },
            },
            phone: formData.phone,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
  
        } else {
          const errorData = await response.json(); 
          console.error('Signup failed:', errorData);
        }
      } catch (error) {
        console.error('Error during signup:', error);
      }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600 text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600 text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-600 text-sm font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your city"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block text-gray-600 text-sm font-medium mb-2">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your street"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-600 text-sm font-medium mb-2">
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipcode" className="block text-gray-600 text-sm font-medium mb-2">
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your zipcode"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lat" className="block text-gray-600 text-sm font-medium mb-2">
              Latitude
            </label>
            <input
              type="text"
              id="lat"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your latitude"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="long" className="block text-gray-600 text-sm font-medium mb-2">
              Longitude
            </label>
            <input
              type="text"
              id="long"
              name="long"
              value={formData.long}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your longitude"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border w-full p-2"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
