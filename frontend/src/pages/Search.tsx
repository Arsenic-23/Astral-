import { Search } from 'lucide-react';
import { useState } from 'react';

const dummyResults = [
  { title: 'Shape of You', artist: 'Ed Sheeran' },
  { title: 'Blinding Lights', artist: 'The Weeknd' },
  { title: 'Levitating', artist: 'Dua Lipa' },
  { title: 'Stay', artist: 'Justin Bieber & The Kid LAROI' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredResults = dummyResults.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for songs, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 pl-10 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400" />
      </div>

      <div className="space-y-3">
        {filteredResults.map((song, index) => (
          <div
            key={index}
            className="p-3 rounded-xl bg-white dark:bg-gray-900 shadow flex flex-col border border-gray-200 dark:border-gray-700"
          >
            <span className="font-medium">{song.title}</span>
            <span className="text-sm text-gray-500">{song.artist}</span>
          </div>
        ))}
        {filteredResults.length === 0 && (
          <p className="text-center text-gray-400 mt-6">No results found</p>
        )}
      </div>
    </div>
  );
}