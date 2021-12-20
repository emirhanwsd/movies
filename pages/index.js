import Head from 'next/head'
import MovieCard from "../components/MovieCard";

const API_KEY = "3830aec43400f6c1e61f95921a0c6867";

const Home = ({movies}) => {
    return (
        <div className="w-full px-12 pt-24 pb-12 flex flex-col justify-center text-gray-900">
            <Head>
                <title>Movies</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            <header className="flex flex-col items-center jusfify-center">
                <h3 className="text-4xl font-bold mb-3">Movies</h3>
                <p className="text-xl text-gray-400 text-center mb-12">Let's inspect most popular films with details.</p>
            </header>

            <div className="w-full h-3/4 gap-x-6 gap-y-12 flex flex-wrap items-center justify-center">
                {movies.map((movie, index) => {
                    return <MovieCard key={index} title={movie.title} id={movie.id} details={movie.overview} thumbnail={movie.backdrop_path} vote={movie.vote_average}/>
                })}
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    let movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

    movies = await movies.json();

    return {
        props: {
            movies: movies.results
        }
    }
}

export default Home;