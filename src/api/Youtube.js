import axios from 'axios';
const KEY ='AIzaSyBVbFIW6lQOdVVbqPremjvWLi8FOOPAZ_w';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:50,
        key:KEY
    }
});
