import React from 'react'

const ReviewBox = ({review}) => {
  return (
    <div className='border-gray-400 border-[2px] p-6'>
        <div className='flex justify-between'>
            <p className='text-xl'>{review.reviewComments}</p>
            <p className='italic'>{review.rating}</p>
        </div>
        <div className='flex justify-between mt-5'>
            <p>By {review.reviewerName}</p>
            <p></p>
        </div>
    </div>
  )
}

export default ReviewBox