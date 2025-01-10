"use client";
import { useState, useEffect } from "react";
import HeaderWithSearchBar from "@/components/HeaderWithSearchBar";
import PhotoGrid from "@/components/PhotoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch("/api/photos");
      const data = await response.json();
      setPhotos(data);
      setFilteredPhotos(data);
    };

    fetchPhotos();
  }, []);

  const handleSearch = (query) => {
    const searchTerms = removeAccents(query.toLowerCase()).split(" ");
    const filtered = photos.filter((photo) => {
      const photoTitle = removeAccents(photo.title.toLowerCase());
      return searchTerms.every((term) => photoTitle.includes(term));
    });
    setFilteredPhotos(filtered);
  };

  return (
    <div className="pb-24">
      <HeaderWithSearchBar onSearch={handleSearch} />
      <div className="pt-24">
        <PhotoGrid photos={filteredPhotos} />
      </div>
      <Footer />
    </div>
  );
}

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
