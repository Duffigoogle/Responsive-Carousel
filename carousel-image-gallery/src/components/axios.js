import axios from 'axios';

// Base url to make requests to the flickr databse

const instance = axios.create({
    baseURL: "https://api.flickr.com/services/rest/?",
});

export default instance;