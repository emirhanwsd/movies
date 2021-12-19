import Head from 'next/head'
import Card from "../components/Card";

const Home = () => {
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
                <p className="text-xl text-gray-400 mb-12">Let's inspect most popular films with details.</p>
            </header>

            <div className="w-full h-3/4 gap-x-6 gap-y-12 flex flex-wrap items-center justify-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Home;