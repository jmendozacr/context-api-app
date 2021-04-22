import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import data from './../data/post';

const Article = () => {
    const { id } = useParams();

    return (
        <>
            {
                data[id-1] ?
                    <div>
                        <h1>{data[id-1].title}</h1>
                        <p>{data[id-1].text}</p>
                    </div>
                :
                    <Redirect to="/"/>
            }
        </>
    );
}

export default Article;