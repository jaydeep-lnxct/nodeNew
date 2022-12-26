import axios from 'axios';
// const 
export const setUserData = async (data) => {
  return await axios.post("userdata", data);
};
