import React from 'react';
import { Link } from 'react-router-dom';
import Controls from '../components/Controls';
import data from './../data/post';

const Blog = () => {
    return (
        <div>
            <h2>Blog Page</h2>
            {
                data.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${[post.id]}`}>
                            {post.title}
                        </Link>
                    </li>
                ))
            }
            <Controls/>
        </div>
    );
}

export default Blog;