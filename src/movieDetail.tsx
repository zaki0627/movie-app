import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Moviedetail() {
  interface Movie {
    id: string;
    original_title: string;
    overview: string;
    poster_path: string;
    year: number;
    month: number;
    runtime: number;
    score: number;
    genres: string[];
  }
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const fetchSearchMovie = async () => {
    const responce = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ja`,

      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmU5MWViZGYxMjA5YmUxNzFjMWVjZmVmYmU3MGZkZSIsIm5iZiI6MTc2ODc5Mjk0Mi4yMDYsInN1YiI6IjY5NmRhMzZlOTNiOGRiY2I2OThmY2RmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IcXRxUZAwkqp2uKB8J6crBOugEbpDCIpXVO2OLhXzwI`,
        },
      },
    );
    const data = await responce.json();
    console.log(data);
    data.year = data.release_date.split("-")[0];
    if (!data.success) {
      setMovie(data);
    }
  };

  useEffect(() => {
    fetchSearchMovie();
  }, []);
  if (movie == null) return <div>該当する映画はありませんでした。</div>;
  return (
    <>
      <h2>original_title:{movie.original_title}</h2>
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_face${movie.poster_path}`}
      />
      <p>year:{movie.year}</p>
      <p>month{movie.month}</p>
      <p>runtime:{movie.runtime}</p>
      <p>score:{movie.score}</p>

      <p>{movie.overview}</p>
    </>
  );
}
