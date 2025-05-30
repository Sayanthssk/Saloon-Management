import axios from "axios";


const instance = axios.create({
    baseURL: 'https://saloon-management-server.onrender.com',
    
  });
  export default instance
