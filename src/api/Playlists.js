import axios from 'axios';
const KEY ='AIzaSyC2Hqlo5N0wkCswjTQGLqdBQyK9EtRgwd4';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:50,
        key:KEY
    }
});