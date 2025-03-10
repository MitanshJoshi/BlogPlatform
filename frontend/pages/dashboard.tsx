import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { Post } from '../types/Post';

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (!token || !userId) {
          router.push('/login');
          return;
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/posts/?authorId=${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [router]);

  const handleCreatePost = () => {
    router.push('/create-post');
  };

  const handleEditPost = (postId: string) => {
    router.push(`/edit-post/${postId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="Dashboard">
      <div className='flex justify-between items-center'>
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <button onClick={handleCreatePost} className="mb-4 bg-teal-600 text-white p-2 rounded-md">Create New Post</button>
      </div>
      <PostList posts={posts} onEditPost={handleEditPost} />
    </Layout>
  );
};

export default Dashboard;