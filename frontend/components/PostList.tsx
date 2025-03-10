import React from 'react';
import { useRouter } from 'next/router';
import { Post } from '../types/Post';
import { format } from 'date-fns';

interface PostListProps {
  posts: Post[];
  onEditPost?: (postId: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onEditPost }) => {
  const router = useRouter();

  if (!Array.isArray(posts) || posts.length === 0) {
    return <p className="text-center text-gray-500">No posts available.</p>;
  }

  const handleCardClick = (postId: string) => {
    router.push(`/post/${postId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between cursor-pointer"
          style={{ height: '300px' }} 
          onClick={() => handleCardClick(post._id)}
        >
          <div>
            <h3 className="text-2xl font-bold break-words text-teal-600">{post.title}</h3>
            <p className="mt-4 break-words text-gray-700">{post.content.substring(0, 100)}...</p>
          </div>
          <div className="mt-4">
            <small className="block text-gray-500">
              Posted by {post.authorId?.email || post.author?.email} on {format(new Date(post.createdAt), 'MM/dd/yyyy')}
            </small>
            {onEditPost && (
              <div className="mt-4 flex space-x-4">
                <button onClick={(e) => { e.stopPropagation(); onEditPost(post._id); }} className="bg-yellow-500 text-white px-4 py-2 rounded-md">Edit</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;