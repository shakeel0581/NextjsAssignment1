import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router'
import PostContent from '../../components/posts/post-detail/post-content.tsx';
import axios from "axios";

async function PostDetailPage(props) {
const idPost = props.params.slug;

var config = {
  method: 'get',
  url: 'http://localhost:8080/api/posts/getPost',
  headers: { }
};
const response = await axios(config);
const featuredPost = response?.data?.data ?? null;

const post = featuredPost?.find(item => item.id == idPost);

  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.title} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export default PostDetailPage;
