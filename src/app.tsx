import React from 'react';
import { PostListWithFetch } from './components/post-list-with-fetch';
import { Link, Route, Routes } from 'react-router-dom';
import { PostListWithAxios } from './components/post-list-with-axios';
import { PostListWithFetchAndContext } from './components/post-list-with-fetch-and-context';
import { PostListWithAxiosAndContext } from './components/post-list-with-axios-and-context';
import { PostListWithAxiosAndStore } from './components/post-list-with-axios-and-store';
import { PostListWithFetchAndStore } from './components/post-list-with-fetch-and-store';
import { PostListWithFetchAndReactQuery } from './components/post-list-with-fetch-and-react-query';
import { PostListWithAxiosAndReactQuery } from './components/post-list-with-axios-and-react-query';

export const App = () => {
  return (
    <div>
      React API client examples
      <br />
      <nav>
        <ul>
          <li>
            <Link to={'/post-list-with-fetch'}>Post list with fetch</Link>
          </li>
          <li>
            <Link to={'/post-list-with-axios'}>Post list with axios</Link>
          </li>
          <li>
            <Link to={'/post-list-with-fetch-and-context'}>Post list with fetch in context</Link>
          </li>
          <li>
            <Link to={'/post-list-with-axios-and-context'}>Post list with axios in context</Link>
          </li>
          <li>
            <Link to={'/post-list-with-fetch-and-store'}>Post list with fetch in store</Link>
          </li>
          <li>
            <Link to={'/post-list-with-axios-and-store'}>Post list with axios in store</Link>
          </li>
          <li>
            <Link to={'/post-list-with-fetch-and-react-query'}>Post list with fetch and react-query</Link>
          </li>
          <li>
            <Link to={'/post-list-with-axios-and-react-query'}>Post list with axios and react-query</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/post-list-with-fetch" element={<PostListWithFetch />} />
        <Route path="/post-list-with-axios" element={<PostListWithAxios />} />
        <Route path="/post-list-with-fetch-and-context" element={<PostListWithFetchAndContext />} />
        <Route path="/post-list-with-axios-and-context" element={<PostListWithAxiosAndContext />} />
        <Route path="/post-list-with-fetch-and-store" element={<PostListWithFetchAndStore />} />
        <Route path="/post-list-with-axios-and-store" element={<PostListWithAxiosAndStore />} />
        <Route path="/post-list-with-fetch-and-react-query" element={<PostListWithFetchAndReactQuery />} />
        <Route path="/post-list-with-axios-and-react-query" element={<PostListWithAxiosAndReactQuery />} />
      </Routes>
    </div>
  );
};
