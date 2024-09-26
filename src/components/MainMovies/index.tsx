"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaFire, FaStar } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";




const MainMovies = () => {


    const [movies, setMovies] = useState<any>([])


    useEffect(() => {
        getMovies()
    },[])
    
    const getMovies = () => {
        axios({
            method:'get',
            url : "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc",
            params: {
                api_key :'5d48829e19bb27c3fb9da618b8e0115b',
                language : 'pt-br'
            }
        }).then((res) => setMovies(res.data.results))
    }

    return(
        <>
        {movies.length > 0 ? <main className="grid grid-cols-4 w-full gap-2 py-4">
        <section className="flex flex-col justify-end bg-cover bg-center rounded-xl col-span-3 h-[500px] p-8 gap-2" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[0].backdrop_path})`}}>
            <section className="flex">
                <h1 className="flex items-center gap-1 text-lg px-2 py-1 text-white bg-white/10 font-semibold rounded-md backdrop-blur"><FaFire/>Em Destaque</h1>
            </section>
            <h1 className="text-4xl text-white font-bold">{movies[0].original_title}</h1>
            <section className="flex items-center gap-2">
                <h2 className="text-lg text-white font-semibold flex items-center gap-1"><FaStar className="text-yellow-300"/>{movies[0].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                <h2 className="text-sm border-l-[1.5px] border-slate-500 px-2">{movies[0].release_date.match(/^\d{4}/)[0]}</h2>   
            </section>
            <p className="text-white text-sm">{movies[0].overview}</p>
            <section className="flex pt-10">
                <a href={`/movies/${movies[0].id}`} className="px-2 py-1 text-lg flex items-center text-white gap-2 font-semibold backdrop-blur rounded bg-white/10 ">Assista o Trailer <BiSolidRightArrow/></a>
            </section>
        </section>
        <section className="col-span-1">
            <h1 className="border-l-4 pl-1 mb-2 text-xl text-white font-semibold">Destaques também</h1>
            <ul className="flex flex-col gap-2">
            <li className="relative bg-cover bg-center rounded-lg h-[150px] flex flex-col justify-between p-2" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[1].backdrop_path})` }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <section className="relative flex opacity-100">
                        <h2 className="flex items-center gap-1 text-lg px-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur">
                            <FaStar className="text-yellow-300" />
                            {movies[1].vote_average.toString().match(/^\d+\.(\d)/)[0]}
                        </h2>
                    </section>
                    <section>
                        <h1 className="relative text-lg text-white font-semibold">{movies[1].original_title}</h1>
                        <section className="flex pt-1">
                            <a href={`/movies/${movies[1].id}`}  className="px-2 py-1 flex items-center text-white gap-2 font-semibold backdrop-blur rounded bg-white/10 ">Assista o Trailer <BiSolidRightArrow/></a>
                        </section>
                    </section>
                </li>
                <li className="relative bg-cover bg-center rounded-lg h-[150px] flex flex-col justify-between p-2" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[2].backdrop_path})` }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <section className="relative flex opacity-100">
                        <h2 className="flex items-center gap-1 text-lg px-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur">
                            <FaStar className="text-yellow-300" />
                            {movies[2].vote_average.toString().match(/^\d+\.(\d)/)[0]}
                        </h2>
                    </section>
                    <section>
                        <h1 className="relative text-lg text-white font-semibold">{movies[2].original_title}</h1>
                        <section className="flex pt-1">
                            <a href={`/movies/${movies[2].id}`}  className="px-2 py-1 flex items-center text-white gap-2 font-semibold backdrop-blur rounded bg-white/10 ">Assista o Trailer <BiSolidRightArrow/></a>
                        </section>
                    </section>
                </li>
                <li className="relative bg-cover bg-center rounded-lg h-[150px] flex flex-col justify-between p-2" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[3].backdrop_path})` }}>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <section className="relative flex opacity-100">
                        <h2 className="flex items-center gap-1 text-lg px-1 text-white bg-white/20 font-semibold rounded-md backdrop-blur">
                            <FaStar className="text-yellow-300" />
                            {movies[3].vote_average.toString().match(/^\d+\.(\d)/)[0]}
                        </h2>
                    </section>
                    <section>
                        <h1 className="relative text-lg text-white font-semibold">{movies[3].original_title}</h1>
                        <section className="flex pt-1">
                            <a href={`/movies/${movies[3].id}`}  className="px-2 py-1 flex items-center text-white gap-2 font-semibold backdrop-blur rounded bg-white/10 ">Assista o Trailer <BiSolidRightArrow/></a>
                        </section>
                    </section>
                </li>
            </ul>
        </section>
    </main> : <main>Loading</main>
    }
    </>
    )
}


export default MainMovies