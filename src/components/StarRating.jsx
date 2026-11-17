import React from 'react'
import { assets, testimonials } from '../assets/assets'

const StarRating = ({rating = 4}) => {
    return (
        <>
            {Array(5).fill('').map((_, index) => (
               <img key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="starIcon" />))}
               
        </>
    )
}

export default StarRating
