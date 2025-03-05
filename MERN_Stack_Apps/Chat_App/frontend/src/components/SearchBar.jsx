import { Search } from 'lucide-react';
import { useState } from 'react';
const SearchBar = () => {
    const [query,setQuery] = useState(null);
    const handleSearch = () => {
      console.log("HI")
    }
    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-full shadow-sm pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
            >
                <Search size={20} />
            </button>
        </div>
    )
};

export default SearchBar;