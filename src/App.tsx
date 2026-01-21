import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router";

function App() {
  interface Movie {
    id: string;
    original_title: string;
    overview: string;
    poster_path: string;
  }
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const fetchMovieList = async () => {
    let url = "";
    if (keyword) {
      url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ja&page=1`;
    } else {
      url = "https://api.themoviedb.org/3/movie/popular?language=ja&page=1";
    }
    const responce = await fetch(
      url,

      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmU5MWViZGYxMjA5YmUxNzFjMWVjZmVmYmU3MGZkZSIsIm5iZiI6MTc2ODc5Mjk0Mi4yMDYsInN1YiI6IjY5NmRhMzZlOTNiOGRiY2I2OThmY2RmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IcXRxUZAwkqp2uKB8J6crBOugEbpDCIpXVO2OLhXzwI`,
        },
      },
    );
    const data = await responce.json();
    console.log(data);
    setMovieList(data.results);
  };

  useEffect(() => {
    fetchMovieList();
  }, [keyword]);

  return (
    <>
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {movieList
          .filter((movie) =>
            keyword === "" ? true : movie.original_title.includes(keyword),
          )
          .map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="movie-card"
            >
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
          ))}
      </div>
    </>
  );
}

export default App;
