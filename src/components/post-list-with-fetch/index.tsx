import React, { useEffect, useState } from 'react';
import { environment } from '../../environment';

export const PostListWithFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPosts([]);
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
  }, []);

  return (
    <div>
      <h1>Post list with fetch on render</h1>
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
