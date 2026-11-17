import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input
        type='checkbox'
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input
        type='radio'
        name='sortOption'
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const AllRooms = () => {
  const navigate = useNavigate()
  const [openFilter, setOpenFilter] = useState(false)
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [selectedSort, setSelectedSort] = useState('')

  const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Rooms', 'Family Suite']

  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000']

  const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First']

  const openRoom = (id) => {
    navigate(`/rooms/${id}`)
    window.scrollTo(0, 0)
  }

  // add / remove a value from a list
  const toggleItem = (list, setList, checked, value) => {
    setList(checked ? [...list, value] : list.filter((item) => item !== value))
  }

  const clearFilters = () => {
    setSelectedRoomTypes([])
    setSelectedPriceRanges([])
    setSelectedSort('')
  }

  const matchesRoomType = (room) =>
    selectedRoomTypes.length === 0 || selectedRoomTypes.includes(room.roomType)

  const matchesPriceRange = (room) =>
    selectedPriceRanges.length === 0 ||
    selectedPriceRanges.some((range) => {
      const [min, max] = range.split(' to ').map(Number)
      return room.pricePerNight >= min && room.pricePerNight <= max
    })

  const sortRooms = (a, b) => {
    if (selectedSort === 'Price Low to High') return a.pricePerNight - b.pricePerNight
    if (selectedSort === 'Price High to Low') return b.pricePerNight - a.pricePerNight
    if (selectedSort === 'Newest First') return new Date(b.createdAt) - new Date(a.createdAt)
    return 0
  }

  const filteredRooms = roomsDummyData
    .filter((room) => matchesRoomType(room) && matchesPriceRange(room))
    .sort(sortRooms)

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-[140px] px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* left column: heading + rooms */}
      <div className='w-full'>
        <div className='flex flex-col items-start text-left'>
          <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-xl'>
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {filteredRooms.length === 0 && (
          <p className='py-10 text-gray-500'>No rooms match your filters.</p>
        )}

        {filteredRooms.map((room) => (
          <div
            key={room._id}
            className='flex flex-col md:flex-row items-start gap-6 py-10 border-b border-gray-300 last:pb-[120px] last:border-0'
          >
            <img
              onClick={() => openRoom(room._id)}
              src={room.images[0]}
              alt='hotel-img'
              title='view room details'
              className='w-full md:w-1/2 max-h-[260px] rounded-xl shadow-lg object-cover cursor-pointer'
            />

            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p
                onClick={() => openRoom(room._id)}
                className='text-gray-800 text-3xl font-playfair cursor-pointer'
              >
                {room.hotel.name}
              </p>
              <div className='flex items-center'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={assets.locationIcon} alt='locationIcon' className='w-4 h-4' />
                <span>{room.hotel.address}</span>
              </div>

              {/* Amenities */}
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /Night</p>
            </div>
          </div>
        ))}
      </div>

      {/* filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16'>

        <div className={`flex items-center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilter && 'border-b'}`}>
          <p className='text-base font-medium text-gray-800'>FILTERS</p>
          <div className='text-xs cursor-pointer'>
            <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden'>
              {openFilter ? 'HIDE' : 'SHOW'}
            </span>
            <span onClick={clearFilters} className='hidden lg:block'>CLEAR</span>
          </div>
        </div>

        <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>

          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
            {roomTypes.map((type, index) => (
              <CheckBox
                key={index}
                label={type}
                selected={selectedRoomTypes.includes(type)}
                onChange={(checked) => toggleItem(selectedRoomTypes, setSelectedRoomTypes, checked, type)}
              />
            ))}
          </div>

          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedPriceRanges.includes(range)}
                onChange={(checked) => toggleItem(selectedPriceRanges, setSelectedPriceRanges, checked, range)}
              />
            ))}
          </div>

          <div className='px-5 pt-5 pb-7'>
            <p className='font-medium text-gray-800 pb-2'>Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={() => setSelectedSort(option)}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default AllRooms