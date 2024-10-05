import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { fetchMovie } from '../utils/api'
import ReviewBox from '../components/ReviewBox'

const SingleMovie = () => {
  const [movie,setMovie] = useState()
    const {id} = useParams()
    const fetchSingleMovie = async ()=>{
      const res = await fetchMovie(id)
      console.log('movie here',res)
      setMovie(res)
    }
    useEffect(()=>{
      fetchSingleMovie()
    },[])
  return (
    <div className='h-screen'>
        <Header />
        <div className='p-10'>
          <div className='flex justify-between'>
            <p className='text-4xl'>{movie?.name}</p>
            <p className='text-4xl text-blue-700'>{movie?.averageRating} / 10</p>
          </div>
          <div className='mt-10'>
            {
              movie?.reviews?.map((r,idx)=>{
                return <ReviewBox key={idx} review={r} />
              })
            }
          </div>
        </div>
    </div>
  )
}

export default SingleMovie