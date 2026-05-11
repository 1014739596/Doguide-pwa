// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const dogs = [
  {
    name: "Golden Retriever",
    origin: "Scotland",
    life: "10 - 12 years",
    size: "Large",
    temperament: "Friendly, Intelligent, Loyal",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "German Shepherd",
    origin: "Germany",
    life: "9 - 13 years",
    size: "Large",
    temperament: "Confident, Smart, Courageous",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Labrador Retriever",
    origin: "Canada",
    life: "10 - 14 years",
    size: "Large",
    temperament: "Gentle, Active, Friendly",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Bulldog",
    origin: "England",
    life: "8 - 10 years",
    size: "Medium",
    temperament: "Calm, Brave, Loving",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Poodle",
    origin: "France",
    life: "12 - 15 years",
    size: "Medium",
    temperament: "Intelligent, Active, Elegant",
    image:
      "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Beagle",
    origin: "England",
    life: "12 - 15 years",
    size: "Small",
    temperament: "Curious, Friendly, Merry",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rottweiler",
    origin: "Germany",
    life: "8 - 10 years",
    size: "Large",
    temperament: "Loyal, Confident, Protective",
    image:
      "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Siberian Husky",
    origin: "Russia",
    life: "12 - 14 years",
    size: "Medium",
    temperament: "Energetic, Friendly, Alert",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Chihuahua",
    origin: "Mexico",
    life: "14 - 17 years",
    size: "Small",
    temperament: "Lively, Devoted, Alert",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dachshund",
    origin: "Germany",
    life: "12 - 16 years",
    size: "Small",
    temperament: "Playful, Clever, Brave",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 to-white p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-3">
          🐶 Dog Guide
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Discover some of the most popular dog breeds in the world with
          information about their origin, lifespan, size, and personality.
        </p>

        {/* Search */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search a dog breed..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-2xl border border-orange-300 shadow-md outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Dogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDogs.map((dog, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={dog.image}
                alt={dog.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-bold text-orange-600 mb-3">
                {dog.name}
              </h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">🌍 Origin:</span>{" "}
                  {dog.origin}
                </p>

                <p>
                  <span className="font-semibold">⏳ Life Span:</span>{" "}
                  {dog.life}
                </p>

                <p>
                  <span className="font-semibold">📏 Size:</span> {dog.size}
                </p>

                <p>
                  <span className="font-semibold">❤️ Temperament:</span>{" "}
                  {dog.temperament}
                </p>
              </div>

              <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-14 text-gray-500">
        <p>🐾 Dog Guide App - Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}