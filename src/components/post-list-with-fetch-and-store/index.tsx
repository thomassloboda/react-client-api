import React, { useEffect, useState } from 'react';
import { environment } from '../../environment';
import { usePostsStore } from './store';

export const PostListWithFetchAndStore = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { posts, setPosts } = usePostsStore();

  useEffect(() => {
    if (posts?.length === 0 && !loading) {
      setLoading(true);
      setError(null);
      fetch(`${environment.apiUrl}posts`)
        .then((r) => {
          if (!r.ok) {
            throw new Error('Failed to fetch posts');
          }
          return r.json();
        })
        .then((obj: PostResponse) => setPosts(obj.posts))
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [loading, posts]);

  return (
    <div>
      <h1>Post list with fetch in store</h1>
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
