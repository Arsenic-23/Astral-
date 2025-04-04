import { Play, Pause, SkipForward, ListMusic } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showQueue, setShowQueue] = useState(false);

  const togglePlayback = () => setIsPlaying(!isPlaying);

  return (
    <div className="flex flex-col items-center justify-between px-4 py-6 space-y-6">
      <motion.img
        src="https://via.placeholder.com/300x300.png?text=Thumbnail"
        alt="Song Thumbnail"
        className="w-64 h-64 rounded-2xl shadow-xl"
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
      />

      <div className="text-center">
        <h2 className="text-xl font-semibold">Song Title</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Artist Name</p>
      </div>

      <div className="w-full space-y-2">
        <div className="flex justify-between text-sm text-gray-400 px-1">
          <span>1:15</span>
          <span>3:45</span>
        </div>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
          <div className="h-full bg-purple-500 rounded-full" style={{ width: '35%' }} />
        </div>
      </div>

      <div className="flex items-center space-x-6 mt-4">
        <button onClick={togglePlayback} className="p-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition">
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>
        <button className="p-3 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-md hover:scale-105 transition">
          <SkipForward size={24} />
        </button>
        <button onClick={() => setShowQueue(!showQueue)} className="p-3 bg-gray-300 dark:bg-gray-700 rounded-full">
          <ListMusic size={24} />
        </button>
      </div>

      {showQueue && (
        <div className="w-full mt-4 p-3 border rounded-xl bg-gray-100 dark:bg-gray-800 space-y-2">
          <p className="text-sm font-semibold text-center mb-2">Up Next</p>
          <div className="text-sm space-y-1">
            <p>• Another Song - Artist</p>
            <p>• Yet Another Song - Artist</p>
            <p>• Last in Queue - Artist</p>
          </div>
        </div>
      )}
    </div>
  );
}