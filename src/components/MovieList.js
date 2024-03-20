import {MovieItem} from "./MovieItem";

export const MovieList = ({movies}) => (
    <section>
        <ul>
            {
                movies.map(movie => <MovieItem {...movie}/>)
            }
        </ul>
    </section>
)