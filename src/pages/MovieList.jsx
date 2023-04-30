import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"


export const MovieList = ({apiPath}) => {

  const { data: movies } = useFetch(apiPath);



  return (
    <main >
      <section className="w-full mx-auto py-7">
        <div className="flex justify-start flex-wrap">
         { movies.map((movie) => (
          <Card key={movie.id} movie={movie}  />
         ))}
        </div>
      </section>
    </main>
  )
}
