"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";



const Movies = () => {

    const [movies, setMovies] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
          getUpMovies();
        }
      }, [id]);

      const getUpMovies = async () => {
        try {
          const res = await axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
            params: {
              api_key: "5d48829e19bb27c3fb9da618b8e0115b",
              language: "pt-br",
            },
          });
          setMovies(res.data);
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        } finally {
          setLoading(false);
        }
      };

      console.log(movies)
      
    if (loading) {
        return <p>Carregando...</p>;
      }  

    return(
        <main className="flex ">
            <img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt="" />
            <h1>{movies.title}</h1>
            <p>{movies.overview}</p>
        </main>
    )
}


export default Movies