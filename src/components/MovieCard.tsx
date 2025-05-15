import React from "react";

interface MovieCardProps {
  name?: string;
  title?: string;
  description: string;
  image: string;
}

export default function MovieCard({ name, title, description, image }: MovieCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition hover:scale-105 duration-200">
      {image ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title || name || "TV show"}
          className="w-full h-auto"
        />
      ) : (
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-500">
          ไม่มีรูปภาพ
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name || title || "ไม่มีชื่อรายการ"}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {description || "ไม่มีคำอธิบาย"}
        </p>
      </div>
    </div>
  );
}
