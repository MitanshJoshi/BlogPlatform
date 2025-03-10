import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { format } from 'date-fns';
import { Post } from '../../types/Post';

interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.title}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <small className="block text-gray-500">
          Posted by {post.authorId?.email || post.author?.email} on {format(new Date(post.createdAt), 'dd/MM/yyyy')}
        </small>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.params as { postId: string };
  console.log(postId);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/posts/get/${postId}`);
  const post = await res.json();

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;