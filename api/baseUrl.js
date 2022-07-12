import axios from 'axios';

export default axios.create(
    {
        baseURL: "https://nearmeproject-0011.herokuapp.com/api/"
    }
)