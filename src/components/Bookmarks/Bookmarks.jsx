
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="md:w-1/3 lg:w-1/3 lg:ml-20 md:ml-20 mt-20 border-l-4 border-sky-500  ">
            <div className='ml-10 text-2xl font-semibold border border-sky-400 px-8 py-10 rounded-xl mb-10'>
                <h3>Total Reading Time :  {readingTime} min</h3>
            </div>

            <h2 className="text-2xl font-semibold ml-5">Bookmarked Articles: {bookmarks.length}</h2>
            {

                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )


            }
            
        </div>
  )
}

Bookmarks.propTypes = {

    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks   