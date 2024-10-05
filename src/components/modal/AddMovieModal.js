import React, { useState } from 'react'
import axios from 'axios'
export const BACKEND_URL= "https://saasmovierevier-1.onrender.com"
const AddMovieModal = () => {
    const [name,setName] = useState('')
    const [date,setDate] = useState('')
    const postMovie = async () =>{
        try {
            const res = await fetch(`${BACKEND_URL}/api/movies`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, releaseDate: date }),
              });
              const data = await res.json();
              console.log(data);
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-xl ml-16">Add new movie</h3>
            <div className="modal-action">
            <div method="dialog flex flex-col">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mb-6" />
                <input onChange={(e)=>setDate(e.target.value)} type="text" placeholder="Release Date" className="input input-bordered w-full max-w-xs mb-6" />
                <div className='flex justify-end'>
                <button onClick={postMovie} className="btn bg-[#6558f5] mr-20 text-white">Create Movie</button>
                </div>
            </div>
            </div>
        </div>
        </dialog>  
        )
}

export default AddMovieModal