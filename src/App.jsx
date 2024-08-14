import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]); 
  const [readingTime, setReadingTime] = useState(0); 

  const handleAddToBookmark = blog => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.id === blog.id);
    
    if (!isBookmarked) {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }
  };

  const handleMarkAsRead = (time,blogID) => {
    const newReadingTime = (Number(readingTime) || 0) + Number(time);
    setReadingTime(newReadingTime);

    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== blogID);
    setBookmarks(updatedBookmarks);
  };

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
