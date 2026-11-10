"use client";

import { useState } from "react";
import Link from "next/link";

const mockProfiles = [
  { id: 1, name: "Amina", age: 24, county: "Nairobi", distance: "2.1 km", bio: "Coffee lover, hiking on weekends. Looking for genuine connection.", interests: ["Hiking", "Coffee", "Music"] },
  { id: 2, name: "Brian", age: 27, county: "Kiambu", distance: "5.4 km", bio: "Software engineer. Love football and good food.", interests: ["Football", "Tech", "Food"] },
  { id: 3, name: "Faith", age: 23, county: "Nairobi", distance: "1.8 km", bio: "Student. Church girl who also likes adventure.", interests: ["Church", "Travel", "Books"] },
  { id: 4, name: "Kevin", age: 29, county: "Mombasa", distance: "8.2 km", bio: "Beach life. Professional looking for something real.", interests: ["Beach", "Business", "Swimming"] },
];

export default function Discover() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const current = mockProfiles[index];

  const swipe = (dir: "like" | "pass") => {
    if (dir === "like") setLiked((l) => [...l, current.id]);
    setIndex((i) => (i + 1) % mockProfiles.length);
  };

  if (!current) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-zinc-950 dark:to-black p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-rose-600 font-semibold">← Home</Link>
          <h1 className="text-2xl font-bold">Discover</h1>
          <span className="text-sm text-zinc-500">Nearby</span>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-rose-100 dark:border-zinc-800">
          <div className="h-72 bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
            {current.name[0]}
          </div>
          <div className="p-6">
            <div className="flex justify-between items-baseline">
              <h2 className="text-2xl font-bold">{current.name}, {current.age}</h2>
              <span className="text-sm bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full">
                {current.distance}
              </span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">{current.county}</p>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">{current.bio}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {current.interests.map((i) => (
                <span key={i} className="text-xs bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={() => swipe("pass")}
            className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-300 flex items-center justify-center text-2xl shadow hover:scale-105 transition"
          >
            ✕
          </button>
          <button
            onClick={() => swipe("like")}
            className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center text-2xl shadow hover:scale-105 transition"
          >
            ♥
          </button>
        </div>

        {liked.length > 0 && (
          <p className="text-center mt-6 text-sm text-zinc-500">
            Liked {liked.length} profile{liked.length > 1 ? "s" : ""}
          </p>
        )}
      </div>
    </div>
  );
}
