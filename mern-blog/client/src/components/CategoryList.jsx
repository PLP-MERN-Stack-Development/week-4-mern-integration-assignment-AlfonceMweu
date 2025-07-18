import { usePosts } from '../context/PostContext';

const CategoryList = () => {
  const { categories } = usePosts();

  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category._id}>
            {category.name}
            {category.description && <span> - {category.description}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;