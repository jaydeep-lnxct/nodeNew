import axios from 'axios';

const url = 'http://localhost:8080';
export const setUserData = async (data) => {
  return await axios.post(`${url}/userdata`, data);
};
