"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Actors = () => {
  const [actors, setActors] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < actors.length - 5) {
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
    getActors();
  }, []);

  const getActors = () => {
    axios({
      method: "get",
      url: 'https://api.themoviedb.org/3/trending/person/day?language=en-US',
      params: {
        api_key: "5d48829e19bb27c3fb9da618b8e0115b",
        language: "pt-br",
      },
    }).then((res) => setActors(res.data.results));
  };

  return (
    <>
      {actors.length > 0 ? (
        <main className="box-border w-full ">
          <section className="flex justify-between">
            <h1>Celebridades</h1>
            <section className="flex gap-1">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </section>
          </section>
          <section className="flex justify-center">
            {actors.slice(currentIndex, currentIndex + 5).map((movie: any) => {
              const voteAverage = movie.vote_average?.toString();
              const firstDecimal =
                voteAverage && voteAverage.match(/^\d+\.(\d)/)
                  ? voteAverage.match(/^\d+\.(\d)/)[0]
                  : "N/A";

              return (
                <section key={movie.id} className="min-w-[150px] min-h-[200px] relative bg-cover bg-center" style={{backgroundImage : `url(https://image.tmdb.org/t/p/original${movie.profile_path})`}}>
                  <h1>{movie.name}</h1>
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

export default Actors;
