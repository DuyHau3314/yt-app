import axios from 'axios';
const KEY = 'AIzaSyBpoS_Cov7GOL8Eq41X5d1HH474nVPVGx8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});