import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/blog";

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {

    const [blogs,setBlogs] =useState([]);

    useEffect(() =>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));


    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl font-semibold mb-10">Blogs {blogs.length}</h1>
            {
                blogs.map(blog => 
                <Blog
                key={blog.id}
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
};

export default Blogs;