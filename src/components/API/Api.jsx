// import axios from 'axios';

// const API_KEY = 'd934da8882e5322d29af0f8a1ae42476';
// const BASE_URL = 'https://api.themoviedb.org/3';

// export const getTrendingMovies = async () => {
//   const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
//   return response.data.results;
// };

import axios from 'axios';
const API_KEY = 'd934da8882e5322d29af0f8a1ae42476';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({ baseURL: BASE_URL, timeout: 10000 });

export const getTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get(
      `/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};
export const searchMovies = async query => {
  try {
    const response = await axiosInstance.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
export const getMovieDetails = async movieId => {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ${movieId}:`, error);
    return null;
  }
};
export const getMovieCredits = async movieId => {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.error(`Error fetching credits for movie ${movieId}:`, error);
    return [];
  }
};
export const getMovieReviews = async movieId => {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching reviews for movie ${movieId}:`, error);
    return [];
  }
};
