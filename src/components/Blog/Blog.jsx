import PropTypes from 'prop-types';

import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog ,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover_picture,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div className='mb-10'>
            <img className='rounded-xl w-full h-[400px] ' src={cover_picture} alt="cover pic"></img>
            <div className="flex lg:justify-between mt-5 md:justify-between flex-col lg:flex-row md:flex-row">
                <div className='flex gap-5 ml-5'>
                    <img className='w-16 rounded-full h-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
            <div className=' flex items-center space-x-4 lg:mr-4  md:mr-4 ml-[105px] '>
                <span className='text-xl'>{reading_time} min read</span>
                <button onClick={ () => handleAddToBookmark(blog)} className='text-2xl text-sky-400' > <FaBookmark /></button>
            </div>

            </div>
        <h2 className="lg:text-4xl md:text-4xl text-3xl mt-6 font-bold">{title}</h2> 
        <p className='mt-5'>
            {
                hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span> )
            }
        </p> 
        <button onClick={() =>handleMarkAsRead(reading_time,id)} className="bg-sky-500 lg:px-10 lg:py-4 md:px-10 md:py-4 
        px-8 py-2 rounded-3xl mt-5 text-black transition transform hover:scale-105 hover:bg-sky-600 ">Mark as Read</button>
        <hr className="border-t border-gray-300 my-4" />

        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,

 };

export default Blog;