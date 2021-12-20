import Head from "next/head"
import Link from "next/link"

import {API_KEY} from "../index"

const Movie = ({movie}) => {
    if(movie.success === false){
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-900">
                <Head>
                    <title>Movie not found</title>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                          rel="stylesheet"/>
                </Head>

                <h3 className="text-5xl font-bold mb-3">Movie not found</h3>
                <p className="text-xl text-gray-400 mb-6 text-center">Please check the URL in the address bar and try again.</p>

                <div className="flex gap-y-3">
                    <Link href="../">
                        <a className="px-6 py-2 text-gray-100 bg-indigo-600 hover:bg-indigo-700 rounded transition-colors">Go back home</a>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col px-8 py-12 text-gray-900">
            <Head>
                <title>{movie.title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            <img className="w-full max-h-[36rem] object-cover rounded-lg drop-shadow-lg mb-12" src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/>

            <div className="w-full h-96 flex flex-col md:flex-row gap-x-8">
                <div className="w-full md:w-3/5 md:h-full border-b md:border-b-0 md:border-r mb-2 md:mb-0">
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold">{movie.title}</h3>
                        <span className="w-auto px-4 max-w-max rounded-full shadow-sm flex items-center justify-center text-sm font-semibold bg-blue-100 text-blue-500">{movie.status}</span>
                    </div>
                    <p className="text-gray-600 mb-8">{movie.overview}</p>
                    <ul className="mb-4 md:mb-0">
                        <h4 className="text-gray-700 mb-4">Genres</h4>
                        {movie.genres.map((genre, index) => {
                            return <li key={index} className="ml-2">
                                <span className="flex items-center gap-x-2 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-400 before:text-gray-300 text-gray-500">{genre.name}</span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="md:h-full flex-1">
                    ...
                </div>
            </div>
        </div>
    )
}

Movie.getInitialProps = async (context) => {
    let query = context.query

    let movie = await fetch(`
https://api.themoviedb.org/3/movie/${query.id}?api_key=${API_KEY}&language=en-US`);

    movie = await movie.json();

    return {
        movie: movie
    }
}

export default Movie;
