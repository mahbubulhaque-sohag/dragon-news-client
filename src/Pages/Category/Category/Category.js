import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2>This is Category: {news.length}</h2>
        </div>
    );
};

export default Category;