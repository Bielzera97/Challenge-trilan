"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const UpComingCarousel = () => {
  const [actors, setActors] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < actors.length - 4) {
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
      url: "https://api.themoviedb.org/3/trending/person/day?language=en-US",
      params: {
        api_key: "5d48829e19bb27c3fb9da618b8e0115b",
        language: "pt-br",
      },
    }).then((res) => setActors(res.data.results));
  };

  console.log(actors)

  return (
    <>

      {actors.length > 0 ? (
        <main className="py-4">
          <section className="flex justify-between items-center mb-4">
          <h1 className="border-l-4 pl-2 mb-2 text-2xl text-white font-semibold">Celebridades</h1>
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

          
          <section className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                width: `${actors.length * 4}%`, 
              }}
            >
              {actors.map((movie: any) => {
                
                return (
                  <section
                    key={movie.id}
                    className="min-w-[25%] min-h-[150px] relative bg-cover bg-center mx-2 rounded-xl flex flex-col justify-end p-3"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.profile_path})`,
                    }}
                  >
                    <h1 className="text-white font-semibold"><a href={`/actors/${movie.id}`}>{movie.name}</a></h1>
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
