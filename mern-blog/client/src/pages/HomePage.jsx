import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';
import CategoryList from '../components/CategoryList';

const HomePage = () => {
  const { posts, categories } = usePosts();

  return (
    <div className="home-page">
      <div className="main-content">
        <h1>Latest Blog Posts</h1>
        <PostList />
      </div>
      <div className="sidebar">
        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;