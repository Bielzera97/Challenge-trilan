"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const UpComingCarousel = () => {
  const [upMovies, setUpMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < upMovies.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
  }

  useEffect(() => {
    getUpMovies();
  }, []);

  const getUpMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1",
      params: {
        api_key: "5d48829e19bb27c3fb9da618b8e0115b",
        language: "pt-br",
      },
    }).then((res) => setUpMovies(res.data.results));
  };

  return (
    <>
      {upMovies.length > 0 ? (
        <main className=" ">
          <section className="flex justify-between">
            <h1>Ultimos Lançamentos</h1>
            <section className="flex gap-1">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </section>
          </section>
          <section className="flex justify-center">
            {upMovies.slice(currentIndex, currentIndex + 4).map((movie: any) => {
              const voteAverage = movie.vote_average?.toString();
              const firstDecimal =
                voteAverage && voteAverage.match(/^\d+\.(\d)/)
                  ? voteAverage.match(/^\d+\.(\d)/)[0]
                  : "N/A";

              return (
                <section key={movie.id} className="min-w-[250px] min-h-[150px] relative bg-cover bg-center" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
                  <h2>{firstDecimal}</h2>
                  <h1>{movie.title}</h1>
                  <a href="#" className="link link-primary">Assista o Trailer</a>
                </section>
              );
            })}
          </section>
        </main>
      ) : (
        <main>Loading...</main>
      )}
    </>
  );
};

export default UpComingCarousel;
