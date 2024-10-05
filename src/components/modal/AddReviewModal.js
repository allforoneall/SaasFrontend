import {useEffect,useState} from 'react'
import {fetchMovie} from '../../utils/api.js'

const AddReviewModal = () => {
  const [movies,setMovies] = useState([])
  const [payload,setPayload] = useState({
    movieId:'',
    reviewerName:'',
    rating:0,
    reviewComments:''
  })
  const getMovies = async ()=>{
    const res = await fetchMovie()
    console.log('in modal',res)
    setMovies(res)
  }
  useEffect(()=>{
    getMovies()
  },[])
  const submitReview = async () =>{
    console.log(payload)
    try {
      const res = await fetch('/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
  }

  return (
<dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-xl ml-16">Add new review</h3>
            <div className="modal-action">
            <div method="dialog flex flex-col">
            <select onChange={(e)=>setPayload({...payload,movieId:e.target.value})} className="select select-bordered w-full max-w-sm mb-6">
              <option disabled selected>Select a Movie?</option>
              {
                movies.map(m=><option value={m?._id}>{m?.name}</option>)
              }
            </select>
                <input onChange={(e)=>setPayload({...payload,reviewerName:e.target.value})} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-sm mb-6" />
                <input onChange={(e)=>setPayload({...payload,rating:e.target.value})} type="text" placeholder="Rating out of 10" className="input input-bordered w-full max-w-sm mb-6" />
                <textarea onChange={(e)=>setPayload({...payload,reviewComments:e.target.value})} className="textarea textarea-bordered w-full max-w-sm mb-6" placeholder="Review comments"></textarea>
                <div className='flex justify-end'>
                <button onClick={submitReview} className="btn bg-[#6558f5] mr-20 text-white">Add Review</button>
                </div>
            </div>
            </div>
        </div>
        </dialog>  
      )
}

export default AddReviewModal