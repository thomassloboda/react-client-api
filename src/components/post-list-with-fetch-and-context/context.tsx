import React, { createContext, useEffect } from 'react';
import { environment } from '../../environment';

const context = createContext<Context>({
  posts: [],
  loading: false,
  error: null,
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = React.useState<PostItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

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
  return <context.Provider value={{ posts, loading, error }}>{children}</context.Provider>;
};

export const usePosts = () => {
  return React.useContext(context);
};
