import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./Rowpost.css";
import {  API_Key, imageurl } from "../constants/constants";
import axios from "../../axios";


function RowPost(props) {
  const [movies, setMovis] = useState([])
  const [urlid,setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
        console.log(response.data)
        setMovis(response.data.results)
      }).catch(err=>{})
  });

  const opts ={
    height:'300',
    width:'100% ',
    playerVars:{
      autoplay:1,
    },

  };


  const handlemove = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=enUS`).then(response=>{
      if(response.data.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array emtyi')
      }
    })
  }

  return (
    <div className="row">
      <h2>{props.titile}</h2>
      <div className="posters">{movies.map((obj)=>
        
        <img onClick={()=>handlemove(obj.id)}
            className="poster"
            alt="poster"
            src={`${imageurl + obj.backdrop_path}`}
          />)
        }
      </div>
      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default RowPost;


/* {movies.map((obj) => (
          <img
            className="poster"
            alt="poster"
            src={`${imageurl + obj.backdrop_path}`}
          /> */ 