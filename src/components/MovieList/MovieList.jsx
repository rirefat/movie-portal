
import { getAllMovies } from "../../data/allMovies";
import MovieCard from "../MovieCard/MovieCard";
import 'react-toastify/dist/ReactToastify.css';

const movies = getAllMovies();

const MovieList = () => {

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;