import React, { useState } from 'react';

const AddAnnouncement = () => {
  const [step, setStep] = useState(1);
  const [propertyInfo, setPropertyInfo] = useState({
    title: '',
    description: '',
    propertyType: '',
    numRooms: '',
    numLivingRooms: '',
    numBathrooms: '',
    pictures: [],
    space: '',
    price: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // picture_Upload
  const handlePictureUpload = (e) => {
    const files = e.target.files;
    const picturesArray = [];
    for (let i = 0; i < files.length; i++) {
      picturesArray.push(URL.createObjectURL(files[i]));
    }
    setPropertyInfo(prevState => ({
      ...prevState,
      pictures: picturesArray,
    }));
  };

  // steps_hundel
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 4) {
      console.log(propertyInfo);
      setPropertyInfo({
        title: '',
        description: '',
        propertyType: '',
        numRooms: '',
        numLivingRooms: '',
        numBathrooms: '',
        pictures: [],
        space: '',
        price: '',
        phoneNumber: '',
      });
      setStep(1);
    } else {
      nextStep();
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-5">
      <h2 className="text-2xl font-bold mb-4 text-violet-600">Add New Announcement</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {step === 1 && (
          <>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title</label>
              <input type="text" id="title" name="title" value={propertyInfo.title} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
              <textarea id="description" name="description" value={propertyInfo.description} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" rows="4" required></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-600">City</label>
              <select id="propertyType" name="propertyType" value={propertyInfo.propertyType} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required>
                <option value="">Select City</option>
                <option value="house">Agdair</option>
                <option value="apartment">Rabat</option>
                <option value="villa">Marakech</option>
              </select>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-600">Property Type</label>
              <select id="propertyType" name="propertyType" value={propertyInfo.propertyType} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required>
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="numRooms" className="block text-sm font-semibold text-gray-600">Number of Rooms</label>
              <input type="number" id="numRooms" name="numRooms" value={propertyInfo.numRooms} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="numLivingRooms" className="block text-sm font-semibold text-gray-600">Number of Living Rooms</label>
              <input type="number" id="numLivingRooms" name="numLivingRooms" value={propertyInfo.numLivingRooms} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="numBathrooms" className="block text-sm font-semibold text-gray-600">Number of Bathrooms</label>
              <input type="number" id="numBathrooms" name="numBathrooms" value={propertyInfo.numBathrooms} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-4">
              <label htmlFor="pictures" className="block text-sm font-semibold text-gray-600 mb-2">Pictures</label>
              <input type="file" id="pictures" name="pictures" onChange={handlePictureUpload} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" multiple accept='image/jpeg, image/png' required style={{ backgroundColor: '#D1D5DB' }} />
              {step === 3 && propertyInfo.pictures.length > 0 && (
                <div className="mt-4 flex flex-wrap">
                  {propertyInfo.pictures.map((picture, index) => (
                    <img key={index} src={picture} alt={index} className="w-24 h-24 object-cover rounded-lg mr-2 mb-2" />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="mb-4">
              <label htmlFor="space" className="block text-sm font-semibold text-gray-600">Space (in m<sup>2</sup>)</label>
              <input type="number" id="space" name="space" value={propertyInfo.space} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-semibold text-gray-600">Price (in MAD)</label>
              <input type="number" id="price" name="price" value={propertyInfo.price} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-600">Phone Number</label>
              <input type="tel" pattern='0\d{9}' title='pleas Entre a valide phone number ' id="phoneNumber" name="phoneNumber" value={propertyInfo.phoneNumber} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
          </>
        )}

        <div className="flex justify-between">
          {step !== 1 && (
            <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md font-semibold focus:outline-none focus:bg-gray-400 transition duration-300">Previous</button>
          )}
          {step !== 4 ? (
            <button type="submit" className="px-4 py-2 bg-violet-600 text-white rounded-md font-semibold focus:outline-none focus:bg-violet-700 transition duration-300">Next</button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md font-semibold focus:outline-none focus:bg-green-700 transition duration-300">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddAnnouncement;