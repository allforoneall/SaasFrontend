import axios from "axios"

export const fetchMovie = async (id)=>{
    let res;
    if(id){
        res = await axios.get(`https://saasmovierevier-1.onrender.com/api/movies/${id}`) 
    }else{
        res = await axios.get('https://saasmovierevier-1.onrender.com/api/movies')
    }
    console.log(res.data)
    return res?.data
}