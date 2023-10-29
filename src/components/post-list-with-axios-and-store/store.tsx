import { create } from 'zustand';

export const usePostsStore = create<Store>((set) => ({
  posts: [],
  setPosts: (posts: PostItem[]) => set({ posts }),
}));
