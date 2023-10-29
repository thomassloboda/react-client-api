import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
    queryFn: () => axios.get<PostResponse>(`${environment.apiUrl}posts`),
  });
  return (
    <div>
      <h1>Post list with axios and react-query</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{(error as Error).message}</div>}
      {data && data.data?.posts?.length > 0 && <PostList posts={(data.data.posts ?? []) as PostItem[]} />}
    </div>
  );
};

export const PostListWithAxiosAndReactQuery = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PostListComponent />
    </QueryClientProvider>
  );
};
