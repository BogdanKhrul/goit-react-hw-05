import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTJjMTE4ZjI3YTk0MDkyYjM2NjkwNGZiYjE4ZjE1OSIsIm5iZiI6MTczNDExMzE0MC4yNjksInN1YiI6IjY3NWM3Nzc0YjAzOGI2NWVkZGQ4ODI0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqkFlQ07bYCa-w0Mr7icqARfYikAS_qWKYLJnywTi84";

const options = {
  headers: {
    Authorization: ACCESS_TOKEN,
  },
};

const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      ...options,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from TMDB:", error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  return fetchData("/trending/movie/day");
};

export const searchMovies = async (query) => {
  return fetchData("/search/movie", {
    query,
    include_adult: false,
    language: "en-US",
    page: 1,
  });
};

export const getMovieDetails = async (movieId) => {
  return fetchData(`/movie/${movieId}`);
};

export const getMovieCredits = async (movieId) => {
  return fetchData(`/movie/${movieId}/credits`);
};

export const getMovieReviews = async (movieId) => {
  return fetchData(`/movie/${movieId}/reviews`);
};

export default {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
