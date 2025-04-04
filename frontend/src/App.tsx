import { useEffect, useState } from 'react';
import { WebApp } from '@twa-dev/sdk';
import { Home, Search, User, ListMusic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NowPlaying from './pages/Home';
import SearchPage from './pages/Search';
import QueuePage from './pages/Queue';
import ProfilePage from './pages/Profile';

const tabs = ['Home', 'Search', 'Queue', 'Profile'];

export default function App() {
  const [theme, setTheme] = useState(WebApp.colorScheme || 'light');
  const [tab, setTab] = useState('Home');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    WebApp.ready();
    setUser(WebApp.initDataUnsafe.user);
    WebApp.onEvent('themeChanged', () => {
      setTheme(WebApp.colorScheme);
    });
  }, []);

  const renderPage = () => {
    switch (tab) {
      case 'Home':
        return <NowPlaying />;
      case 'Search':
        return <SearchPage />;
      case 'Queue':
        return <QueuePage />;
      case 'Profile':
        return <ProfilePage user={user} theme={theme} setTheme={setTheme} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} transition-all`}>
      <div className="p-4 text-xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Vibie
      </div>
      {renderPage()}
      <div className="fixed bottom-0 w-full flex justify-around bg-gray-100 dark:bg-gray-900 p-2 border-t">
        {tabs.map((t) => (
          <Button variant="ghost" key={t} onClick={() => setTab(t)}>
            {t === 'Home' && <Home />}
            {t === 'Search' && <Search />}
            {t === 'Queue' && <ListMusic />}
            {t === 'Profile' && <User />}
          </Button>
        ))}
      </div>
    </div>
  );
}