type PostResponse = {
    limit: number
    posts: PostItem[];
    skip: number;
    total: number
}

type PostItem = {
    body: string
    id: number
    reactions: number
    tags: string[]
    title: string
    userId: number
}

type Context = {
    posts: PostItem[]
    loading: boolean
    error: Error | null
}

type Store = {
    posts: PostItem[]
    setPosts: (posts: PostItem[]) => void
}