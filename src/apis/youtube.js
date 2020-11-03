import axios from "axios";

const KEY = 'AIzaSyB3_XD8TY1jClHFhC0q5F2Uo_72rFYmtuU';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5000,
    type: 'video',
    key: KEY
  }
});