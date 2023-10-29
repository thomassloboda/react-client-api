import React from 'react';
import { Provider, usePosts } from './context';

const PostList = () => {
  const { posts, loading, error } = usePosts();
  return (
    <div>
      <h1>Post list with axios in context</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{(error as Error).message}</div>}
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const PostListWithAxiosAndContext = () => {
  return (
    <Provider>
      <PostList />
    </Provider>
  );
};
