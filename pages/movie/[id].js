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
        <div>
            <Head>
                <title>{movie.title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            <main>
                // TODO
            </main>
        </div>
    )
}

Movie.getInitialProps = async (context) => {
    let query = context.query

    let movie = await fetch(`
https://api.themoviedb.org/3/movie/${query.id}?api_key=${API_KEY}&language=en-US`);

    movie = await movie.json();

    console.log(movie)

    return {
        movie: movie
    }
}

export default Movie;