import { Link } from "react-router";
import type { Movie } from "./App";

interface Props {
  movie: Movie;
}
function MovieCard(props: Props) {
  const { movie } = props;
  return (
    <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-card">
      <div className="left">
        <p className="movie-title">{movie.original_title}</p>
        <div className="image-wrapper">
          <img
            className="movie-image"
            src={`https://media.themoviedb.org/t/p/w300_and_h450_face${movie.poster_path}`}
          />
        </div>
      </div>
      <div className="right">
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
