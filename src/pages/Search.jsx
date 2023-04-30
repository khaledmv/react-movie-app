import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main >
    <section>
      <p className="dark:text-white text-gray-700 text-3xl mt-4">{movies.length === 0 ? `No result for ${queryTerm}` : ` Result for ${queryTerm}`} </p>
    </section>
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
