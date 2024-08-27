"use client"
import axios from "axios"
import { useEffect, useState } from "react"

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


    console.log(movies)
    return(
        <>
        {movies.length > 0 ? <main className="grid grid-cols-3 gap-2">
        <section className="col-span-2 bg-cover bg-center rounded-xl pt-32" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[0].poster_path})`}}>
            <h1>Em destaque</h1>
            <h1>{movies[0].original_title}</h1>
            <h2>{movies[0].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
            <h2>{movies[0].release_date.match(/^\d{4}/)[0]}</h2>   
            <p>{movies[0].overview}</p>
            <a href="">Assista o Trailer</a>
        </section>
        <section className="col-span-1">
            Destaques
            <ul className="flex flex-col gap-2">
                <li className="bg-cover bg-center rounded-lg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[1].poster_path})`}}>
                    <h2>{movies[1].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                    <h1>{movies[1].original_title}</h1>
                    <a href="">Assista o Trailer</a>
                </li>
                <li className="bg-cover bg-center rounded-lg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[2].poster_path})`}}>
                    <h2>{movies[2].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                    <h1>{movies[2].original_title}</h1>
                    <a href="">Assista o Trailer</a>
                </li>
                <li className="bg-cover bg-center rounded-lg" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[3].poster_path})`}}>
                    <h2>{movies[3].vote_average.toString().match(/^\d+\.(\d)/)[0]}</h2>
                    <h1>{movies[3].original_title}</h1>
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