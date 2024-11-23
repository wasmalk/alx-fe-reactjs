import { useQuery } from '@tanstack/react-query';
import React from "react";

function PostsComponent() {
  return <div>Posts will be displayed here!</div>;
}




const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    isStale,
    refetch, // Function to trigger a manual refetch
  } = useQuery(['posts'], fetchPosts, {
    staleTime: 60000, // Data remains fresh for 60 seconds
    cacheTime: 300000, // Cache persists for 5 minutes
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>
      {isFetching && !isLoading && <p>Fetching updates...</p>}
      {isStale ? (
        <p>Data loaded from cache. Updates will happen in the background.</p>
      ) : (
        <p>Data is fresh!</p>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
