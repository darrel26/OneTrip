import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

const userSignUp = async (newUser) => {
    const request = axios.post(`${baseURL}/users/register`, newUser);
    const response = await request;
    console.log(response.data);
    return response.data;
}

export { userSignUp };
