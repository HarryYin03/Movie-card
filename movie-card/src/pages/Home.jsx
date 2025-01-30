import MovieCard from "../components/MovieCard";
import {useState} from "react"; 

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "The Godfather", release_date: "1972" },
        { id: 2, title: "The Shawshank Redemption", release_date: "1994" },
        { id: 3, title: "The Dark Knight", release_date: "2008" }
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery(".....");
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value = {searchQuery}
                    onChange = {(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home;