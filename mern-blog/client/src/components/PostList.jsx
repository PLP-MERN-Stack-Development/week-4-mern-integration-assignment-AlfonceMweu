import { usePosts } from '../context/PostContext';

const PostList = () => {
  const { posts, loading, error, deletePost } = usePosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post._id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
