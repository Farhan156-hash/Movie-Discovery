import MovieCard from '../components/MovieCard'
import { useState } from 'react'

function Home() {

	const [searchQuery, setSearchQuery] = useState("");

	const movies = [
		{ id: 1, title: "Movie a", release_date: "2020" },
		{ id: 2, title: "Movie b", release_date: "2021" },
		{ id: 3, title: "Movie c", release_date: "2022" },
	];

	const handleSearch = (e) => {
		e.preventDefault();
		alert(searchQuery);
	};

	return (
		<div className="home">
			<form onSubmit={handleSearch} className='search-form'>
				<input className='search-input' type="text" placeholder='Movies, Series...'
					value={searchQuery}
					onChange={(e) => { setSearchQuery(e.target.value) }}
				/>

				<button className='search-button'>Search</button>
			</form>

			<div className="movie-grid">
				{movies.map((movie) => {
					return (
						<MovieCard movie={movie} key={movie.id} />
					)
				})}
			</div>
		</div>
	)
}

export default Home