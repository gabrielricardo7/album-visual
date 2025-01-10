import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HeaderWithSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="bg-[#003b6f] text-white text-center py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-2xl mr-4">Album Visual</h1>
        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Pesquisar fotos na galeria..."
            className="border border-gray-300 p-2 text-black rounded-l"
          />
          <button className="bg-[#003b6f] text-white p-2 rounded-r">
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithSearchBar;
