import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const FetchPosts = () => {
    const [post, setPosts] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
         const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (!response.ok) {
                    throw new Error("Erro ao buscar os posts" + response.statusText);
                }
                const data = await response.json();
                setPosts(data);        
            } catch (error) {
                setError(error.message);
            }
         };

         fetchPosts();        
}, []); 

  return (
    <div>
        <h1>FetchPosts</h1>
        {error ? (
            <p>Erro: {error}</p>
        ) : (
            post.map((post) => (
                <div key={post.id}>
                <h2 key={post.title}></h2>
                <p>{post.body}</p>
                </div>
            )) 
        )}
    </div>
  );
};

export default FetchPosts