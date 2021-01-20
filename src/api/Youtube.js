import axios from 'axios';
const KEY ='AIzaSyBZgY-Ck7YZIAOQxQNs4FqR6PxrGtBthP8';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:50,
        key:KEY
    }
});