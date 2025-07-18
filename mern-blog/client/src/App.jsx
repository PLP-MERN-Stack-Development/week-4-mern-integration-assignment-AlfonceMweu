import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostProvider } from './context/PostContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <PostProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<PostForm />} />
          <Route path="/posts/:id/edit" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </PostProvider>
  );
}

export default App;

