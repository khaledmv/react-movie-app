import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export const MovieDetail = () => {
  const params = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
      async function fetchMovies(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);
        const json = await response.json();
        setMovie(json)
        console.log(json)
      }
      fetchMovies();
  },[]);
 
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    
    <main>
     <div className="flex justify-around items-center flex-wrap pt-28 sm:pt-8 sm:px-8 ">
     <div className="max-w-sm sm:my-8">
        <img className="rounded" src={image} alt={movie.title} />
     </div>
      <div className="max-w-2xl ">
        <h1 className="text-3xl text-gray-700 dark:text-amber-500">{movie.title} </h1>
        <p className="text-normal text-gray-700 dark:text-white mt-2"> {movie.overview} </p>
      
        { movie.genres ? 

        (  <p className="my-7 flex flex-wrap gap-2">
          { movie.genres.map((gener) => (
            <span key={gener.id} className="m-2 border border-gray-200 rounded dark:border-gray-600 p-2 text-gray-700 dark:text-white"> {gener.name} </span>
          ))}
        </p> )
        
         : ""}

         
        <div class="flex items-center">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average
        }</p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{movie.vote_count
        } reviews</span>
        </div>

        <p className="py-2">
          <span className="text-gray-700 dark:text-white"> Release Date :  {movie.release_date}</span>
        </p>

        <p className="py-2">
          <span className="text-gray-700 dark:text-white"> Run time :  {movie.runtime} min</span>
        </p>
        <p className="py-2">
          <span className="text-gray-700 dark:text-white"> Language : { movie.original_language}</span>
        </p>
       
        <p className="py-2">
          <span className="text-gray-700 dark:text-white"> Revenue : { movie.revenue}</span>
        </p>


      </div>
     </div>
    </main>
  )
}
