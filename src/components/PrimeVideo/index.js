// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')

  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  const teluguMovies = moviesList.filter(movie => movie.categoryId === 'TELUGU')

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <h1 className="action-genre">Action Movies</h1>
      <div className="movie-slider">
        <MoviesSlider movies={actionMovies} />
      </div>
      <h1 className="action-genre">Comedy Movies</h1>
      <div className="movie-slider">
        <MoviesSlider movies={comedyMovies} />
      </div>
      <h1 className="action-genre">Telugu Movies</h1>
      <div className="movie-slider">
        <MoviesSlider movies={teluguMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
