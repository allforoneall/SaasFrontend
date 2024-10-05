import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddMovieModal from './components/modal/AddMovieModal';
import AddReviewModal from './components/modal/AddReviewModal';
import axios from 'axios';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";
import { fetchMovie } from './utils/api';
import {useNavigate} from 'react-router-dom'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies,setMovies] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        const getMovies = async ()=>{
            const res = await fetchMovie()
            setMovies(res)
        }
        getMovies()
    },[])

    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        let suffix = 'th';
        if (day % 10 === 1 && day !== 11) {
            suffix = 'st';
        } else if (day % 10 === 2 && day !== 12) {
            suffix = 'nd';
        } else if (day % 10 === 3 && day !== 13) {
            suffix = 'rd';
        }

        return `${day}${suffix} ${month}, ${year}`;
    };
    const filteredMovies = movies.filter(review =>
        review.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (<>
        <div className={`bg-white ${movies?.length>6?'h-full':'h-screen'}`}>
        <Header />
            <div className=" w-[600px] px-5">
                <h1>The best movie reviews site!</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow" placeholder="Search" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </label>
                
            </div>

            <div className="reviews-container">
                {filteredMovies.map((review, index) => (
                    <div className="movie-review-box cursor-pointer" key={index} onClick={()=>navigate(`/${review._id}`)}>
                        <h3>{review.name}</h3>
                        <p>
                            <em>Released: {formatDate(review.releaseDate)}</em>
                        </p>
                        <p>
                          Rating: {review.averageRating}</p>
                        <div className="button-container">
                            <button><BiSolidEdit className='text-[#788896] text-xl' /></button>
                            <button ><RiDeleteBin7Fill className='text-[#788896] text-xl' /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <AddMovieModal />
        <AddReviewModal />
        </>);
};

export default App;
