import PropTypes from 'prop-types';

import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog ,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,cover_picture,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div className='mb-10'>
            <img className='rounded-xl w-full h-[500px] ' src={cover_picture} alt="cover pic"></img>
            <div className="flex justify-between mt-5">
                <div className='flex gap-5 ml-5'>
                    <img className='w-16 rounded-full h-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
            <div className=' flex items-center space-x-4 mr-4  '>
                <span className='text-xl'>{reading_time} min read</span>
                <button onClick={ () => handleAddToBookmark(blog)} className='text-2xl text-sky-400' > <FaBookmark /></button>
            </div>

            </div>
        <h2 className="text-5xl mt-6 font-semibold">{title}</h2> 
        <p className='mt-5'>
            {
                hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span> )
            }
        </p> 
        <button onClick={() =>handleMarkAsRead(reading_time)} className="bg-sky-500 px-10 py-4 rounded-3xl mt-5 text-white transition transform hover:scale-105 hover:bg-sky-600">Mark as Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function,

 };

export default Blog;