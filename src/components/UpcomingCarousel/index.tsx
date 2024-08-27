"use client"
import axios from "axios"
import { useEffect, useState } from "react"

const UpComingCarousel = () => {

    const [upMovies, setUpMovies] = useState<any>([])

    useEffect(() => {
        getUpMovies()
    }, [])

    const getUpMovies = () => {
        axios({
            method : 'get',
            url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            params: {
                api_key : "5d48829e19bb27c3fb9da618b8e0115b",
                language : "pt-br"
            }
        }).then((res) => setUpMovies(res.data))
    }

    console.log(upMovies)

    return(
        <main>
            Upcoming Carousel

        </main>
    )
}

export default UpComingCarousel