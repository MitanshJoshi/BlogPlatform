import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { Post } from '../types/Post';

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  const [postList, setPostList] = useState<Post[]>(posts);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-teal-600">Blog Posts</h1>
        <PostList posts={postList} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/getAllPosts`);
  const text = await res.text();
  console.log('Response status:', res.status);
  console.log('Response text:', text);

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }

  const posts: Post[] = JSON.parse(text);

  return {
    props: {
      posts,
    },
  };
};

export default Home;