"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`
        );
        setError("");
      },
      () => setError("Unable to retrieve your location. Please allow GPS permission.")
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Karibu Near
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-95">
            Location-based matchmaking for Kenya. Meet people nearby in Nairobi, Mombasa, Kisumu, Kiambu, and across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/discover"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition"
            >
              Start Matching
            </Link>
            <button
              onClick={getLocation}
              className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition"
            >
              Share Location
            </button>
          </div>
          {location && (
            <p className="mt-6 text-sm bg-white/20 inline-block px-4 py-2 rounded-full">
              Your location: {location}
            </p>
          )}
          {error && <p className="mt-4 text-rose-200">{error}</p>}
        </div>
      </header>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Create Profile", desc: "Add photos, bio, age, interests, tribe, religion, and lifestyle preferences." },
            { title: "Location Matching", desc: "We use GPS to show people nearby. Filter by county, distance, age, and more." },
            { title: "Swipe & Chat", desc: "Like, match, and chat in real-time. Safety tools and report system included." },
          ].map((f) => (
            <div key={f.title} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-rose-100 dark:border-zinc-800">
              <h3 className="text-xl font-semibold mb-3 text-rose-600">{f.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kenya Localization */}
      <section className="bg-rose-50 dark:bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Made for Kenya</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Nairobi", "Mombasa", "Kisumu", "Kiambu", "Nakuru", "Eldoret", "Thika", "Student Mode", "Church Mode", "M-Pesa Premium"].map((item) => (
              <div key={item} className="bg-white dark:bg-zinc-800 py-4 rounded-xl font-medium shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-zinc-500 text-sm">
        Karibu Near © {new Date().getFullYear()} • Built with Next.js & Netlify
      </footer>
    </div>
  );
}
