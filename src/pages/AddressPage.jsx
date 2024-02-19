// AddressPage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddressForm from '../components/AddressForm';
import { addOrder } from '../api/order';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addressListState, userState } from '../components/state/RecoilState';
import { getAddress, removeAddress } from '../api/user';
import { useNavigate } from 'react-router-dom';



const AddressPage = () => {
  const [addresses, setAddresses] = useRecoilState(addressListState);
  const [addingNewAddress, setAddingNewAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchAddress(){
      const response  = await getAddress(user.userId);
      console.log(response)
      console.log(response, addresses);
      if(response){
        if(Array.isArray(response)){
          response.forEach((addressdata)=>{
            handleAddAddress(addressdata)
            // setAddresses(...addresses, addressdata);
          })
        }
        else{
          setAddresses(response);
        }
      }
    }
    fetchAddress();
  }, [user])

  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
    setAddingNewAddress(false); // Hide form after submission
  };

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };

  const handleCheckout = async () => {
    // Implement your checkout logic here
    const session  = await addOrder(user.userId);
    // navigate(`${session.url}`);
    window.location.replace(session.url);
    console.log("Proceeding to checkout with address: ", addresses[selectedAddress]);
  };

  const handleDeleteAddress = async (index, addressId) => {
    const response = await removeAddress(addressId, user.userId);
    console.log(response)
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);

    // If the selected address is deleted, clear the selection
    if (selectedAddress === index) {
      setSelectedAddress(null);
    }
  };

  const addressComponentSet = addresses.map((address, index) => (
    <div key={index} className="mb-4">
      <div className={`p-4 rounded ${selectedAddress === index ? 'border-2 border-gold' : 'border border-gold'}`}>
        {/* <p>{address.fullname}</p> */}
        <p>{address.address_line_1}</p>
        <p>{address.address_line_2}</p>
        <p>{address.city}, {address.state}, {address.country.countryName}</p>
        <p>{address.zipCode}</p>
        {address.landmark && <p>Landmark: {address.landmark}</p>}
        <button
          onClick={() => handleSelectAddress(index)}
          className={`py-2 px-8 rounded ${selectedAddress === index ? 'bg-golden text-black' : 'text-gold border border-gold'}`}
        >
          Use this address
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
            onClick={() => handleDeleteAddress(index ,address.addressId)}
            className="bg-red-600 text-white py-2 px-8 rounded hover:bg-red-700 transition duration-300"
          >
            Delete
          </button>
      </div>
    </div>
  ))

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-gold p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Addresses</h1>
          {
          addresses.length > 0 ? (
            addressComponentSet
          ) : !addingNewAddress && (
            <p>No addresses yet. Please add one.</p>
          )}
          {addingNewAddress ? (
            <AddressForm onSubmit={handleAddAddress} />
          ) : (
            <div className="text-center">
              <button
                onClick={() => setAddingNewAddress(true)}
                className="mt-4 bg-golden text-black py-2 px-8 rounded hover:bg-opacity-90 transition duration-300 font-medium text-gold border border-gold "
              >
                Add a new address
              </button>
            </div>
          )}
          {addresses.length > 0 && (
            <div className="text-center mt-6">
              <button
                onClick={handleCheckout}
                disabled={selectedAddress === null}
                className={`mt-4 py-2 px-8 bg-golden rounded ${selectedAddress !== null ? 'bg-gold text-black' : 'bg-gray-400 text-gray-800'}`}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddressPage;
