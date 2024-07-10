/* eslint-disable no-unused-vars */
import React from 'react'
import { FaHeart, FaShare } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import { bedroomState, descState, imgState, typeState } from '../atom'

const PreviewDetail = () => {
    const img = useRecoilValue(imgState)
    const type = useRecoilValue(typeState)
    const bhk = useRecoilValue(bedroomState)
    const desc = useRecoilValue(descState)

    return (
        <div className='text-gray-800 p-6 bg-white flex flex-col shadow-md rounded w-full mt-28 mx-auto h-fit'>
            <div className='w-full flex justify-between items-start mb-4'>
                <h2 className='text-md md:text-xl lg:text-2xl font-semibold text-center'>{bhk} Flat / Apartment for {type} in Gokul Village Chs 2 (542 Sq.ft) </h2>
            </div>
            <div className='flex justify-between mb-3 items-center'>
                <div>
                    <p className='text-sm md:text-md text-gray-800'>
                        {desc}
                    </p>
                </div>
                <div className='flex space-x-4'>
                    <button className='shadow shadow-md p-2 rounded-full text-red-500'>
                        <FaHeart size={24} className='w-3 h-3 sm:w-6 sm:h-6' />
                    </button>
                    <button className='shadow shadow-md p-2 rounded-full text-blue-500'>
                        <FaShare size={24} className='w-3 h-3 sm:w-6 sm:h-6' />
                    </button>
                </div>
            </div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img}
                        className="w-full max-h-96 object-contain" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='mt-4 text-sm md:text-md text-gray-600'>Property ID: 12345</div>
        </div>
    )
}

export default PreviewDetail
