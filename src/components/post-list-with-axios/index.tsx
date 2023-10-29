import React, { useEffect, useState } from 'react';
import { environment } from '../../environment';
import axios from 'axios';

export const PostListWithAxios = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);
  useEffect(() => {
    setLoading(true);
    setError(null);
    setPosts([]);
    axios
      .get<PostResponse>(`${environment.apiUrl}posts`)
      .then((obj) => setPosts(obj.data.posts))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Post list with axios on render</h1>
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
