import axios from "axios";

const API_KEY = "62e6774f61ce61066f95a2b16f991507"

const BASE_URL = "https://api.themoviedb.org/3/"

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`


export class MoviesService {

    static getMovies() {
        return axios(withBaseUrl("movie/popular"))
    }

    static getMovieById(movieId){
        return axios(withBaseUrl(`movie/${movieId}`))
    }
}