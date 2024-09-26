"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Para pegar o id da URL
import NavBar from "@/components/NavBar";

const Test = () => {
  const [test, setTest] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams(); // Extrair o id da URL

  useEffect(() => {
    if (id) {
      getUpMovies();
    }
  }, [id]);

  const getUpMovies = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/person/${id}?language=pt-BR`,
        params: {
          api_key: "5d48829e19bb27c3fb9da618b8e0115b",
          language: "pt-br",
        },
      });
      setTest(res.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }
  console.log(test)
  return (
    <main className="flex">
      <img src={`https://image.tmdb.org/t/p/original${test.profile_path}`} alt="" width={300} />
      <h1>{test.name}</h1>
      <p>{test.biography}</p>
      
    </main>
  );
};

export default Test;
