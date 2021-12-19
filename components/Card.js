const Card = props => {
    let voteClasses = "w-auto px-4 max-w-max rounded-full shadow-sm flex items-center justify-center text-sm font-semibold mb-2";

    if (props.vote > 7){
        voteClasses += " bg-green-100 text-green-500";
    }else{
        voteClasses += " bg-yellow-100 text-yellow-500";
    }

    return (
        <div className="w-[24rem] h-[28rem] rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <img className="rounded-t-lg shadow-md" src={`https://www.themoviedb.org/t/p/original${props.thumbnail}`} alt={props.title}/>
            <div className="w-full flex flex-col p-6">
                <span className={voteClasses}>{props.vote + (props.vote.toString().length === 1 ? ".0" : "")}</span>
                <h3 className="text-xl font-bold mb-4">{props.title}</h3>
                <p className="text-gray-400 max-h-64 text-sm text-clip">{props.details}</p>
            </div>
        </div>
    )
}

export default Card;