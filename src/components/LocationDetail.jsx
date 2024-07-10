/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { amenitiesState, areaState, buildingState, cityState, streetState } from '../atom'

const LocationDetail = ({setLocation}) => {
  const [building, setBuilding] = useRecoilState(buildingState)
  const [area, setArea] = useRecoilState(areaState)
  const [street, setStreet] = useRecoilState(streetState)
  const [city, setCity] = useRecoilState(cityState)
  const setFeatures = useSetRecoilState(amenitiesState);

  useEffect(() => {
    if (city && building && area && street) {
      setLocation(1)
    }
  }, [city, building, area, street])
  
  useEffect(() => {
    setFeatures([])
  }, [])

  return (
    <div className='p-4'>
      <form className="text-sm sm:text-[15.6px] space-y-4 bg-white text-black">

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
          <div className="p-2 w-full">
            <label className="block font-medium mb-1">
              Building/ Society Name <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Enter Apartment Name" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setBuilding(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="p-2 w-full">
            <label className="block font-medium mb-1">
              Locality / Area <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Eg : Sheetal Nagar" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setArea(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
          <div className="p-2 w-full">
            <label className="block text-md font-medium mb-1">
              Landmark/ Street Name <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Prominent Landmark" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setStreet(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="p-2 w-full">
            <label className="block text-md font-medium mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center w-full">
                <input type="text" placeholder="Enter City" name="userType" className="border border-1px-gray p-2 sm:p-3 w-full" required
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-xl p-5 mb-4'>Mark locality on Map</h2>
        </div>
      </form>
    </div>
  )
}

export default LocationDetail