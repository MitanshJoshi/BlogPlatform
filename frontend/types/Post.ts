export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: {
    _id: string;
    email: string;
  };
  createdAt: string;
}