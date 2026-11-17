import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
   <Link
  to={`/rooms/${room._id}`}
  onClick={() => window.scrollTo(0, 0)}
  className='relative block max-w-[280px] w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow'
>
  <img src={room.images?.[0]} alt={room.hotel.name} className='w-full h-48 object-cover' />

  {index % 2 === 0 && (
    <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm'>
      Best Seller
    </p>
  )}

  <div className='p-4'>
    <div className='flex items-center justify-between gap-2'>
      <p className='font-playfair text-xl font-medium text-gray-800 truncate'>{room.hotel.name}</p>
      <div className='flex items-center gap-1 text-sm shrink-0'>
        <img src={assets.starIconFilled} alt='star-icon' className='w-4 h-4' /> 4.5
      </div>
    </div>

    <div className='flex items-center gap-1 text-sm mt-2'>
      <img src={assets.locationIcon} alt='location-icon' className='w-4 h-4' />
      <span className='truncate'>{room.hotel.address}</span>
    </div>

    <div className='flex items-center justify-between mt-4'>
      <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
      <span className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all'>
        Book Now
      </span>
    </div>
  </div>
</Link>
  )
}

export default HotelCard
