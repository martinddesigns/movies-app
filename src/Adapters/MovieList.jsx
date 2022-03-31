import { Outlet, Link } from "react-router-dom";
import { Movies } from '../movies';
import Movie from './Movie';

export default function MovieList({ movieSearch, loader, sort }) {
  
  const filteredArray = Movies.filter((movie) => {
    if (movieSearch === '') {
      return movie;
    } else if (movie.title.toLowerCase().includes(movieSearch.toLowerCase())) {
      return movie;
    }
  })

// Movies.sort((a, b) => a.title.localeCompare(b.title));
  
  const sortbyName = Movies.filter((movie) => {
    if (movieSearch === '') {
      return movie;
    } else if (movie.title.toLowerCase().includes(movieSearch.toLowerCase())) {
      return movie;
    }
  }).sort((a, b) => a.title.localeCompare(b.title))


  return (
    <section className="mvlist">
      <div className="container">
        {loader ? <span className='bg-indigo-500 py-[10px] px-[20px] text-center mx-auto inline-block rounded text-white font-bold'>Loading</span> :

          filteredArray.length !== 0 ? 
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-[20px]">
          
              {sort === 'name' ? sortbyName.map((movie, id) => (
                  <Link key={id} to={`/movie/${movie.id}`}>
                    <Movie title={movie.title} image={movie.imageUrl} rank={movie.rank} />
                </Link>

                )) : filteredArray.map((movie, id) => (
                  <Link key={id} to={`/movie/${movie.id}`}>
                    <Movie title={movie.title} image={movie.imageUrl} rank={movie.rank} />
                  </Link>
                ))}
            <Outlet />
          </div>

          : <span className='bg-indigo-500 py-[10px] px-[20px] text-center mx-auto inline-block rounded text-white font-bold'>Nothing was found</span>
        }
      </div>
    </section>
  )
}
