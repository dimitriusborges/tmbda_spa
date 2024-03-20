import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MoviesService} from "../api/MoviesService";

export const MovieDetail = () => {
    const {id} = useParams()

    const [movie, setMovie] = useState({})
    const fetchMovieDetails = async () => {
        const {data} = await MoviesService.getMovieById(id)
        setMovie(data)
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [])


    return (
        <>
            <h1>{movie.title}</h1>
            <article>
                {movie.overview}
            </article>
        </>
    )
}