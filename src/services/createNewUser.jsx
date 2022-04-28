import axios from "axios";

const createNewUser = async (data) => {
    const URL = 'https://users-crud1.herokuapp.com/user/';
    const req = await axios.post(URL, data);
    return req
}

export default createNewUser