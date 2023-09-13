import Head from 'next/head';
import { Fragment } from 'react';
import axios from "axios";
import AllPosts from '../components/posts/all-posts.tsx';

async function AllPostsPage(props) {
    var config = {
  method: 'get',
  url: 'http://localhost:8080/api/posts/getPost',
  headers: { }
};
const response = await axios(config);
const Post = response?.data?.data ?? null;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={Post} />
    </Fragment>
  );
}

export default AllPostsPage;
