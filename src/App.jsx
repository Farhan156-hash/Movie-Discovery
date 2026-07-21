import { useState } from 'react'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
    <MovieCard movie={{
      title: "movie1",
      release_date: "2025",
    }}/>

    <MovieCard movie={{
      title: "movie2",
      release_date: "2020",
    }}/>
    </>
  )
}

export default App
