// AddressForm.jsx
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addressListState, countryState, stateOptionsState, userState } from './state/RecoilState';
import { addAddress } from '../api/user';

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    country: '',
    state: '',
    fullname: '',
    mobile: '',
    pincode: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    landmark: '',
  });
  const [country, setCountry] = useRecoilState(countryState);
  const [stateOptions, setStateOptions] = useRecoilState(stateOptionsState);
  const [addresses, setAddresses] = useRecoilState(addressListState);
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (country) {
      setStateOptions(['State 1', 'State 2', 'State 3']); // Replace with actual API call
    }
  }, [country, setStateOptions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addAddress(address.addressLine1, address.addressLine2, address.city, address.country, address.pincode, user.userId);
    console.log(response);
    if(response){
      setAddresses([...addresses, address]);
    }
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded">
      {/* Remove bg-black if you don't want the black background */}
      <select name="country" value={address.country} onChange={(e) => {
          setCountry(e.target.value);
          handleChange(e);
        }} className="w-full p-2 mb-2 rounded">
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        {/* ...other countries */}
      </select>

      <select
        name="state"
        value={address.state}
        onChange={handleChange}
        className="w-full p-2 mb-2 rounded"
        disabled={!country}
      >
        <option value="">Select State</option>
        {stateOptions.map((stateName, index) => (
          <option key={index} value={stateName}>
            {stateName}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="fullname"
        value={address.fullname}
        onChange={handleChange}
        placeholder="Full name (First and Last name)"
        className="w-full p-2 mb-2 rounded"
      />

      <input
        type="text"
        name="mobile"
        value={address.mobile}
        onChange={handleChange}
        placeholder="Mobile number"
        className="w-full p-2 mb-2 rounded"
      />

      <input
        type="text"
        name="pincode"
        value={address.pincode}
        onChange={handleChange}
        placeholder="Pincode"
        className="w-full p-2 mb-2 rounded"
      />

      <input
        type="text"
        name="addressLine1"
        value={address.addressLine1}
        onChange={handleChange}
        placeholder="Address Line 1"
        className="w-full p-2 mb-2 rounded"
      />

      <input
        type="text"
        name="addressLine2"
        value={address.addressLine2}
        onChange={handleChange}
        placeholder="Address Line 2"
        className="w-full p-2 mb-2 rounded"
      />

      <input
        type="text"
        name="city"
        value={address.city}
        onChange={handleChange}
        placeholder="City/Town"
        className="w-full p-2 mb-2 rounded"
      />

<input
        type="text"
        name="landmark"
        value={address.landmark}
        onChange={handleChange}
        placeholder="Landmark (optional)"
        className="w-full p-2 mb-2 rounded"
      />

      {/* Add Submit Button */}
      <button type="submit" className="bg-golden text-white py-2 px-8 rounded hover:bg-red-700 transition duration-300">
        Submit Address
      </button>
    </form>
  );
};

export default AddressForm;
