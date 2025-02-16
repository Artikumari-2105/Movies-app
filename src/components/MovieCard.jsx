import React from 'react'

const MovieCard = ({movie : 
    {title, vote_average, poster_path, release_date, orgiinal_language}}) => {
  return (
    <div className='movie-card'>
        <img src={poster_path ? `http://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />
        <div className="mt-4">
            <h3>{title}</h3>
            <div className="content">
                <div className="rating">
                    <img src="star.svg" alt="start icon" />
                    <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                </div>
                <span>·</span>
                <p className='lang'>{orgiinal_language}</p>
                <p className="year">
                    {
                        release_date? release_date.split('-')[0] : 'N/A'
                    }
                </p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard