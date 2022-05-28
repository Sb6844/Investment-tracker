import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";


// used to get user realted data access. These are the two types for public vs private access 


// const getPublicContent = () => {
//     return axios.get(API_URL + "all");
//   };

// const getUserBoard = () => {
//     return axios.get(API_URL + "user", { headers: authHeader() });
//   };