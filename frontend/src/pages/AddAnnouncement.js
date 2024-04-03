import React, { useEffect, useState } from 'react';
import { fetchAddAnnounce } from '../redux/AnnounceReducer';
import { useDispatch, useSelector } from 'react-redux'

const AddAnnouncement = () => {
  const [step, setStep] = useState(1);
  const announceState = useSelector((i) => i.announces)
  const dispatch = useDispatch()
  const [propertyInfo, setPropertyInfo] = useState({
    title: '',
    description: '',
    type: '',
    num_rooms: '',
    num_bathrooms: '',
    pictures: [],
    space: '',
    price: '',
    address: '',
  });

  useEffect(() => {
    console.log(announceState)
  }, [announceState])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyInfo(prevState => ({
      ...prevState,
      [name]: value.toLowerCase(),
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
      pictures: [...prevState.pictures, ...picturesArray],
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
      dispatch(fetchAddAnnounce(propertyInfo))
      console.log(propertyInfo);
      setPropertyInfo({
        title: '',
        description: '',
        type: '',
        num_rooms: '',
        num_bathrooms: '',
        pictures: [],
        space: '',
        city: '',
        price: '',
        address: '',
      });
      setStep(1);
    } else {
      nextStep();
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-5">
      <h2 className="text-2xl font-bold mb-4 text-violet-600">Add New Announcement</h2>
      <div className='flex flex-col space-y-2'>
        {announceState.announces.errors && announceState.announces.errors.title && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.title[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.description && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.description[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.type && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.type[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.num_rooms && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.num_rooms[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.num_bathrooms && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.num_bathrooms[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.pictures && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.pictures[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.space && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.space[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.city && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.city[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.price && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.price[0]}</span>}
        {announceState.announces.errors && announceState.announces.errors.address && <span className='text-md text-red-700 p-3 rounded-lg text-center bg-red-200'>{announceState.announces.errors.address[0]}</span>}
      </div>
      {announceState.announces.message && <span className='text-md text-green-700 p-3 rounded-lg text-center bg-green-200'>{announceState.announces.message}</span>}
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
              <label htmlFor="city" className="block text-sm font-semibold text-gray-600">City</label>
              <select id="city" name="city" value={propertyInfo.city} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required>
                <option value="">Select City</option>
                <option value="agadir">Agdair</option>
                <option value="rabat">Rabat</option>
                <option value="marakech">Marakech</option>
              </select>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-semibold text-gray-600">Property Type</label>
              <select id="type" name="type" value={propertyInfo.type} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required>
                <option value="">Select Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="num_rooms" className="block text-sm font-semibold text-gray-600">Number of Rooms</label>
              <input type="number" id="num_rooms" name="num_rooms" value={propertyInfo.num_rooms} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="num_bathrooms" className="block text-sm font-semibold text-gray-600">Number of Bathrooms</label>
              <input type="number" id="num_bathrooms" name="num_bathrooms" value={propertyInfo.num_bathrooms} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-4">
              <label htmlFor="pictures" className="block text-sm font-semibold text-gray-600 mb-2">Pictures</label>
              <span className='text-sm text-gray-500 my-2'>The minimum number of photos allowed is 4 and the maximum is 8</span>
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
              <label htmlFor="address" className="block text-sm font-semibold text-gray-600">Adress</label>
              <input type="text" title='pleas Entre a valide address ' id="address" name="address" value={propertyInfo.address} onChange={handleChange} className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-500 transition duration-300" required />
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
            <button type={announceState.status === 'loading' ? 'button' : "submit"} className="px-4 py-2 bg-green-600 text-white rounded-md font-semibold focus:outline-none focus:bg-green-700 transition duration-300">{announceState.status === 'loading' ? '....' : "Create"} </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddAnnouncement;