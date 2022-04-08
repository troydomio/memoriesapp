import axios from 'axios';

//make api calls

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => {
    axios.get(url);
}

//redux