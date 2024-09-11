"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {BiSolidRightArrow} from "react-icons/bi"
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

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
        <main className="pt-4">
          <section className="flex justify-between items-center mb-4">
          <h1 className="border-l-4 pl-2 mb-2 text-2xl text-white font-semibold">Recomendados</h1>
            <section className="flex gap-4">
              <button
                className="p-2 rounded-full duration-150 active:text-sm"
                onClick={handlePrevious}
              >
                <SlArrowLeft/>
              </button>
              <button
                className="p-2 rounded-full duration-150 active:text-sm"
                onClick={handleNext}
              >
                <SlArrowRight/>
              </button>
            </section>
          </section>

          
          <section className="overflow-hidden w-full max-w-full">
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
                    className="min-w-[25%] min-h-[175px] relative bg-cover bg-center mx-2 rounded-2xl flex flex-col justify-between p-2"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <section className="relative flex opacity-100 ">
                        <h2 className="flex items-center gap-1 text-lg px-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur">
                            <FaStar className="text-yellow-300" />
                            {firstDecimal}
                        </h2>
                    </section>
                    <section>
                        <h1 className="relative text-white font-semibold">{movie.title}</h1>
                        <section className="flex pt-1">
                            <a href="" className="px-2 py-1 flex items-center text-white gap-2 font-semibold backdrop-blur rounded-lg bg-white/20 ">Assista o Trailer <BiSolidRightArrow/></a>
                        </section>
                    </section>
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
