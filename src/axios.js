import axios from 'axios';
import {baseurl} from'./compnte/constants/constants';


const instance = axios.create({
    baseURL: baseurl,
   
  });

  export default instance



  