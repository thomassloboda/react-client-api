import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { environment } from '../../environment';

const PostList = ({ posts }: { posts: PostItem[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

const PostListComponent = () => {
  const {
    isLoading: loading,
    data,
    error,
  } = useQuery({
    queryKey: ['posts', 'axios'],
    queryFn: async () => {
      const response = await fetch(`${environment.apiUrl}posts`);
      if (!response.ok) throw new Error('Network response was not ok');
      return (await response.json()) as PostResponse;
    },
  });
  return (
    <div>
      <h1>Post list with fetch and react-query</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{(error as Error).message}</div>}
      {data && data?.posts?.length > 0 && <PostList posts={(data.posts ?? []) as PostItem[]} />}
    </div>
  );
};

export const PostListWithFetchAndReactQuery = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PostListComponent />
    </QueryClientProvider>
  );
};
