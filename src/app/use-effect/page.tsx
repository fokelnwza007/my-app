"use client";

import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffect() {
  const [movieList, setMovieList] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        console.log(response)
        setMovieList(response.data.results);
      });

  }, []);
  

  return (
    <div>
      <MenuBar page="เรียนรู้ UseEffect" />

      {movieList.map((movie,index) =>(
      <div className="bg-amber-300">
        <img 
        src="https://image.tmdb.org/t/p/w500" {movie.poster_path}
        alt="{movie.title}"
        />
        <h2 className="text-center">{movie.title}</h2>
        <p className="text-center">{movie.overview}</p>
        



      </div>
      ))}

      <Footer />
    </div>
  );
}

