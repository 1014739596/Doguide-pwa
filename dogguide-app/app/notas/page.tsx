// app/notas/page.tsx
"use client";

import { useState } from "react";

const countries = [
  {
    country: "Germany",
    flag: "🇩🇪",
    dogs: [
      "German Shepherd",
      "Rottweiler",
      "Dachshund",
      "Doberman",
    ],
  },
  {
    country: "England",
    flag: "🇬🇧",
    dogs: ["Bulldog", "Beagle", "Golden Retriever", "Bull Terrier"],
  },
  {
    country: "France",
    flag: "🇫🇷",
    dogs: ["Poodle", "French Bulldog", "Basset Hound"],
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    dogs: ["Siberian Husky", "Samoyed", "Borzoi"],
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    dogs: ["Akita Inu", "Shiba Inu", "Japanese Spitz"],
  },
  {
    country: "China",
    flag: "🇨🇳",
    dogs: ["Chow Chow", "Pekingese", "Shar Pei"],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    dogs: ["Chihuahua", "Xoloitzcuintli"],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    dogs: ["Labrador Retriever", "Newfoundland Dog"],
  },
  {
    country: "Switzerland",
    flag: "🇨🇭",
    dogs: ["Saint Bernard", "Bernese Mountain Dog"],
  },
  {
    country: "Scotland",
    flag: "🏴",
    dogs: ["Golden Retriever", "Border Collie", "Scottish Terrier"],
  },
];

export default function NotasPage() {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((item) =>
    item.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3">
          🌍 Dogs by Country
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explore dog breeds classified by the countries where they originated.
        </p>

        {/* Search */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-2xl border border-blue-300 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCountries.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">{item.flag}</span>

              <h2 className="text-3xl font-bold text-blue-700">
                {item.country}
              </h2>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Popular Dog Breeds:
              </h3>

              <ul className="space-y-3">
                {item.dogs.map((dog, dogIndex) => (
                  <li
                    key={dogIndex}
                    className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-gray-700 font-medium hover:bg-blue-100 transition"
                  >
                    🐶 {dog}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-14 text-gray-500">
        <p>🐾 Dogs Around the World - Next.js App</p>
      </footer>
    </main>
  );
}