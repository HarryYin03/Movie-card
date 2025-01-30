function MovieCard({ movie }) {
    function onfavouriteClick() {
        alert('clicked')
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <button className="favorite-btn" onClick={onfavouriteClick}>
                    😁
                </button>
            </div>
            <div className="movie info">
                <h3>{movie.title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;