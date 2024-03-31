import {useState, useEffect, createContext} from 'react';

import { housesData } from '../data'

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')

  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const allContries = houses.map((house)=> (
      house.country
    ))
    const uniqueCountries = ['Location (any)', ...new Set(allContries)]
    setCountries(uniqueCountries)
  },[])

  useEffect(()=>{
    const allProperties = houses.map((house)=> (
      house.type
    ))
    const uniqueProperties= ['property type (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties)
  },[])

  const handleClick = () => {
    setLoading(true)
  }

  const isDefault = (str) => {
    return str.split(' ').includes('(any)');
  }
  const minPrice = parseInt(price.split(' ')[0])
  const maxPrice = parseInt(price.split(' ')[2])

  const newHouses = housesData.filter((house)=>{
    const housePrice = parseInt(house.price);

    if ( 
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice 
       ){
        return house
       }
    if (isDefault(country) && isDefault(property) && isDefault(price)){
      return house
    }

    if (!isDefault(country) && isDefault(property) && isDefault(price)){
      return house.country === country
    }
    if (isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.type === property
    }

    if (isDefault(country) && isDefault(property) && !isDefault(price)){
      if(housePrice >=minPrice && housePrice <= maxPrice){
        return house
      }
    }

    if (!isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.country === country && house.type === property
    }
    if (!isDefault(country) && isDefault(property) && !isDefault(price)){
      if(housePrice >=minPrice && housePrice <= maxPrice){
        return house.country === country
      }
    }
    if (!isDefault(country) && !isDefault(property) && !isDefault(price)){
      if(housePrice >=minPrice && housePrice <= maxPrice){
        return house.country === country && house.type === property
      }
    }

  })
  setTimeout(()=>{
    setLoading(false)
    return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses)
  },1000)

  return (
    <HouseContext.Provider value={{
      handleClick,
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      houses,
      setHouses,
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;
