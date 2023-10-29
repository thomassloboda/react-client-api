import React, { useEffect, useState } from 'react';
import { environment } from '../../environment';
import axios from 'axios';
import { usePostsStore } from './store';

export const PostListWithAxiosAndStore = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { posts, setPosts } = usePostsStore();

  useEffect(() => {
    if (posts?.length === 0 && !loading) {
      setLoading(true);
      setError(null);
      axios
        .get<PostResponse>(`${environment.apiUrl}posts`)
        .then((obj) => setPosts(obj.data.posts))
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [loading, posts]);

  return (
    <div>
      <h1>Post list with axios in store</h1>
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
