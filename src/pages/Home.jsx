import MovieCard from '../components/MovieCard'

function Home() {

	const movies = [
		{ id: 1, title: "Movie a", release_date: "2020" },
		{ id: 2, title: "Movie b", release_date: "2021" },
		{ id: 3, title: "Movie c", release_date: "2022" },
	];

	const handleSearch = () => {};

	return (
		<div className="home">
			<form onSubmit={handleSearch} className='search-form'>
				<input className='search-input' type="text" placeholder='Movies, Series...' />

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