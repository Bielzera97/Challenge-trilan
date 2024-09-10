"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaFire, FaStar } from "react-icons/fa";



const MainMovies = () => {


    const [movies, setMovies] = useState<any>([])


    useEffect(() => {
        getMovies()
    },[])
    
    const getMovies = () => {
        axios({
            method:'get',
            url : "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
            params: {
                api_key :'5d48829e19bb27c3fb9da618b8e0115b',
                language : 'pt-br'
            }
        }).then((res) => setMovies(res.data.results))
    }

    return(
        <>
        {movies.length > 0 ? <main className="grid grid-cols-4 w-full gap-2">
        <section className="flex flex-col justify-end bg-cover bg-center rounded-xl col-span-3 h-[500px]" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[0].backdrop_path})`}}>
            <section className="flex">
                <h1 className="flex items-center gap-1 text-lg px-2 py-1 text-white bg-white/10 font-semibold rounded-md backdrop-blur"><FaFire/>Em Destaque</h1>
            </section>
            <h1 className="text-4xl text-white font-bold">{movies[0].original_title}</h1>
            <h2 className="text-lg text-white font-semibold flex items-center gap-1"><FaStar className="text-yellow-300"/>{movies[0].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
            <h2>{movies[0].release_date.match(/^\d{4}/)[0]}</h2>   
            <p className="text-white">{movies[0].overview}</p>
            <a href="">Assista o Trailer</a>
        </section>
        <section className="col-span-1">
            <h1 className="border-l-4 pl-1 ml-2 mb-2 text-xl text-white font-semibold">Destaques também</h1>
            <ul className="flex flex-col gap-2">
                <li className="bg-cover bg-center rounded-lg h-[150px] " style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[1].backdrop_path})`}}>
                    <section className="flex">
                        <h2 className="flex items-center gap-1 text-lg px-1 py-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur"><FaStar className="text-yellow-300"/>{movies[1].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                    </section>
                    <h1 className="text-lg text-white font-semibold">{movies[1].original_title}</h1>
                    <a href="">Assista o Trailer</a>
                </li>
                <li className="bg-cover bg-center rounded-lg h-[150px]" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[2].backdrop_path})`}}>
                    <section className="flex">
                        <h2 className="flex items-center gap-1 text-lg px-1 py-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur"><FaStar className="text-yellow-300"/>{movies[2].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                    </section>
                    <h1 className="text-lg text-white font-semibold">{movies[2].original_title}</h1>
                    <a href="">Assista o Trailer</a>
                </li>
                <li className="bg-cover bg-center rounded-lg h-[150px]" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[3].backdrop_path})`}}>
                    <section className="flex">
                        <h2 className="flex items-center gap-1 text-lg px-1 py-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur"><FaStar className="text-yellow-300"/>{movies[3].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                    </section>
                    <h1 className="text-lg text-white font-semibold">{movies[3].original_title}</h1>
                    <a href="">Assista o Trailer</a>
                </li>
            </ul>
        </section>
    </main> : <main>Loading</main>
    }
    </>
    )
}


export default MainMovies