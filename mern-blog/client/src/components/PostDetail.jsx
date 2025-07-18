// client/src/components/PostDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../context/PostContext';
import * as api from '../services/api';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Check if post exists in context first
        const existingPost = posts.find(p => p._id === id);
        if (existingPost) {
          setPost(existingPost);
        } else {
          // Fetch from API if not in context
          const { data } = await api.fetchPost(id);
          setPost(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, posts]);

  const handleDelete = async () => {
    try {
      await api.deletePost(id);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading post...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      {post.category && (
        <span className="category">Category: {post.category.name}</span>
      )}
      {post.featuredImage && (
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="featured-image"
        />
      )}
      <div className="content">{post.content}</div>
      <div className="post-meta">
        <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
        {post.updatedAt && (
          <span> | Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
        )}
      </div>
      <div className="actions">
        <button onClick={() => navigate(`/posts/${id}/edit`)}>
          Edit Post
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostDetail;