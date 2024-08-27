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
        {movies.length > 0 ? <main className="grid grid-cols-3 ">
        <section className="col-span-2 bg-cover" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[0].poster_path})`}}>
            <h1>{movies[0].original_title}</h1>
            <h2>{movies[0].vote_average}</h2>
            <h2>{movies[0].release_date.match(/^\d{4}/)[0]}</h2>   
            <p>{movies[0].overview}</p>
        </section>
        <section className="col-span-1">
            Destaques
            <ul>
                <li><h1>{movies[1].original_title}</h1></li>
                <li><h1>{movies[2].original_title}</h1></li>
                <li><h1>{movies[3].original_title}</h1></li>
            </ul>
        </section>
    </main> : <main>Loading</main>
    }
    </>
    )
}


export default MainMovies