import { Routes, Route } from "react-router-dom";

import { MovieDetail, MovieList,Search,PageNotFound } from "../pages";

 export const AllRoutes = () => {
     return(
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="" element={<MovieList/>} />
                <Route path="/movie/:id" element={<MovieDetail/>} />
                <Route path="/movies/popular" element={<MovieList/>} />
                <Route path="/movies/top" element={<MovieList/>} />
                <Route path="/movies/upcoming" element={<MovieList/>} />
                <Route path="/movies/search" element={<Search/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
     )
 }