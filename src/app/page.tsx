import axios from "axios";
import Head from 'next/head';
import FeaturedPosts from './components/home-page/featured-posts.tsx';
import Hero from './components/home-page/hero.tsx';

export default async function Home() {
  
  var config = {
  method: 'get',
  url: 'http://localhost:8080/api/posts/getPost',
  headers: { }
};
const response = await axios(config);
const featuredPost = response?.data?.data ?? null;
console.log("data", featuredPost);
  return (
    <main>
      <Head>
        <title>Shakeel' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      {featuredPost && <FeaturedPosts posts={featuredPost} />}
    </main>
  );
}
