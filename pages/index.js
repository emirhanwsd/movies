import Head from 'next/head'

const Home = () => {
    return (
        <div className="w-full h-full text-gray-900">
            <Head>
                <title>Movies</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>
        </div>
    )
}

export default Home;