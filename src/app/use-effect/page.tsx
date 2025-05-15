"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard"; // หรือ TvCard ถ้าคุณเปลี่ยนชื่อ

interface TvShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
}

export default function UseEffectPage() {
  const [tvList, setTvList] = useState<TvShow[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        setTvList(response.data.results);
      })
      .catch(() => {
        alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
      });
  }, []);

  return (
    <div>
      <MenuBar page={"รายการทีวีที่กำลังมาแรง"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {tvList.map((tv) => (
          <MovieCard
            key={tv.id}
            name={tv.name}
            title={""}
            description={tv.overview}
            image={tv.poster_path}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
