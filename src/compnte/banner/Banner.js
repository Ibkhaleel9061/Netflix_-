import React, { useEffect,useState } from 'react';
import{API_Key,imageurl} from '../constants/constants';
import axios from '../../axios';
import './banner.css';



function Banner() {
         const [movie,setmovie] = useState()
  useEffect(()=>{
    axios.get( `trending/all/week?api_key=${API_Key}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[0])
      setmovie(Response.data.results[0])
    })

  },[])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageurl+movie.backdrop_path : "" })`}} className='banner'>
        <div className='content'>
            <h1 className='titel'>{movie ? movie.title : ""}</h1>
            <div className='banner_button'>
                <button className='button'>Play List</button>
                <button className='button'>my List</button>
                <h2 className='descpion'>{movie ? movie.overview :""}</h2>
                <div className="fact"></div>

            </div>


        </div>

      
    </div>
  )
}

export default Banner
