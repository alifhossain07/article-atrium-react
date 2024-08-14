import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  

  const [bookmarks, setBookmarks] = useState([]); 

  const handleAddToBookmark = blog =>{
    
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }


  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
