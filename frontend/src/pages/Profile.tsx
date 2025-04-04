import { Moon, Sun, Star, Clock, BarChart } from 'lucide-react';

export default function ProfilePage({ user, theme, setTheme }: any) {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="p-6 space-y-6 flex flex-col items-center">
      <img
        src={user?.photo_url || 'https://via.placeholder.com/100.png?text=User'}
        alt="Profile"
        className="w-24 h-24 rounded-full shadow-lg"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold">{user?.first_name || 'User'}</h2>
        <p className="text-sm text-gray-500">{user?.username ? `@${user.username}` : ''}</p>
      </div>

      <div className="w-full space-y-3">
        <ProfileButton icon={<BarChart />} label="Stats" />
        <ProfileButton icon={<Star />} label="Favorites" />
        <ProfileButton icon={<Clock />} label="History" />
        <ProfileButton
          icon={theme === 'dark' ? <Sun /> : <Moon />}
          label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}

function ProfileButton({ icon, label, onClick = () => {} }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <span>{icon}</span>
      <span className="text-left">{label}</span>
    </button>
  );
}