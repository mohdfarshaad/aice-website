"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "AI Workshop 2024",
      category: "workshops",
      date: "November 2024",
      description: "Hands-on machine learning workshop with industry experts",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 2,
      title: "Annual Tech Conference",
      category: "conferences",
      date: "October 2024",
      description:
        "Our biggest annual gathering with keynote speakers and networking",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 3,
      title: "Hackathon 2024 Winners",
      category: "competitions",
      date: "September 2024",
      description:
        "Celebrating our hackathon winners and their innovative solutions",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 4,
      title: "Cloud Computing Seminar",
      category: "workshops",
      date: "August 2024",
      description: "Deep dive into AWS, Azure, and Google Cloud platforms",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 5,
      title: "Women in Tech Panel",
      category: "panels",
      date: "July 2024",
      description: "Inspiring discussion with female leaders in technology",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      category: "competitions",
      date: "June 2024",
      description: "Entrepreneurs presenting their innovative tech solutions",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 7,
      title: "Networking Night",
      category: "networking",
      date: "May 2024",
      description:
        "Casual networking event with food, drinks, and great conversations",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 8,
      title: "Cybersecurity Workshop",
      category: "workshops",
      date: "April 2024",
      description:
        "Learning about the latest security threats and protection strategies",
      image: "/images/placeholder.jpeg",
    },
    {
      id: 9,
      title: "Mobile Development Bootcamp",
      category: "workshops",
      date: "March 2024",
      description: "Intensive training on React Native and Flutter development",
      image: "/images/placeholder.jpeg",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "workshops", name: "Workshops" },
    { id: "conferences", name: "Conferences" },
    { id: "competitions", name: "Competitions" },
    { id: "panels", name: "Panels" },
    { id: "networking", name: "Networking" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore highlights from our events, workshops, and community
              activities
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50 shadow"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <Image
                    width={200}
                    height={300}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No items found for the selected category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
