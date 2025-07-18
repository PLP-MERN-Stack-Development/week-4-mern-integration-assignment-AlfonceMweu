import { useState } from 'react';
import { usePosts } from '../context/PostContext';

const PostForm = ({ post = null, onSuccess }) => {
  const { addPost, updatePost, categories } = usePosts();
  const [formData, setFormData] = useState({
    title: post?.title || '',
    content: post?.content || '',
    category: post?.category?._id || '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (post) {
        await updatePost(post._id, formData);
      } else {
        await addPost(formData);
      }
      onSuccess?.();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
        required
      />
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Content"
        required
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="">Select a category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
      <button type="submit">{post ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default PostForm;