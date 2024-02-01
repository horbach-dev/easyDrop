import axios from 'axios'

export const axiosClient = axios.create({
  withCredentials: true,
  // baseURL: 'http://localhost:5000'
})
