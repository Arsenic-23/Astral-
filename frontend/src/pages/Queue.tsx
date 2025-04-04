import React from 'react';

export default function QueuePage() {
  const queue = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      thumbnail: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg',
    },
    {
      id: 2,
      title: 'Heat Waves',
      artist: 'Glass Animals',
      thumbnail: 'https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Up Next</h2>
      <div className="space-y-4">
        {queue.map((track) => (
          <div
            key={track.id}
            className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl shadow-sm transition"
          >
            <img
              src={track.thumbnail}
              alt={track.title}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-base font-medium">{track.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}