const Card = props => {
    return (
        <div className="w-[24rem] h-[28rem] rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <img className="rounded-t-lg shadow-md" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9OYu6oDLIidSOocW3JTGtd2Oyqy.jpg"/>
            <div className="w-full flex flex-col p-6">
                <span className="w-auto px-4 max-w-max rounded-full flex items-center justify-center bg-indigo-100 text-indigo-500 text-sm font-semibold mb-2">Horror</span>
                <h3 className="text-xl font-bold mb-4">The Good Doctor</h3>
                <p className="text-gray-400 text-sm text-clip">
                    Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.
                </p>
            </div>
        </div>
    )
}

export default Card;