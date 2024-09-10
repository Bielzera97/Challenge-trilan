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
  };

  useEffect(() => {
    getUpMovies();
  }, []);

  const getUpMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/trending/movie/week?language=pt-BR",
      params: {
        api_key: "5d48829e19bb27c3fb9da618b8e0115b",
        language: "pt-br",
      },
    }).then((res) => setUpMovies(res.data.results));
  };

  return (
    <>
      {upMovies.length > 0 ? (
        <main className="">
          <section className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Recomendados</h1>
            <section className="flex gap-4">
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={handleNext}
              >
                Next
              </button>
            </section>
          </section>

          {/* Contêiner com overflow hidden para mostrar apenas 4 filmes */}
          <section className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                width: `${upMovies.length * 5}%`, 
              }}
            >
              {upMovies.map((movie: any) => {
                const voteAverage = movie.vote_average?.toString();
                const firstDecimal =
                  voteAverage && voteAverage.match(/^\d+\.(\d)/)
                    ? voteAverage.match(/^\d+\.(\d)/)[0]
                    : "N/A";

                return (
                  <section
                    key={movie.id}
                    className="min-w-[25%] min-h-[150px] relative bg-cover bg-center mx-2"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                  >
                    <h2 className="text-white">{firstDecimal}</h2>
                    <h1 className="text-white">{movie.title}</h1>
                    <a href="#" className="link link-primary">
                      Assista o Trailer
                    </a>
                  </section>
                );
              })}
            </div>
          </section>
        </main>
      ) : (
        <main>Loading...</main>
      )}
    </>
  );
};

export default UpComingCarousel;
