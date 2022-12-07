import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

const userSignUp = async (newUser) => {
    const request = axios.post(`${baseURL}/users/register`, newUser);
    const res = await request;
    console.log(res.data);
    return res.data;
};

export { userSignUp };
