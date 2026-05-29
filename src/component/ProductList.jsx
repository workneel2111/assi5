// src/component/ProductList.jsx
import useFetch from '../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
  // Call our custom hook and extract the data, loading status, and error message
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

  // Conditional rendering: If still loading, show a friendly loading text and stop here
  if (loading) return <p className="loading">Loading products...</p>;
  
  // Conditional rendering: If an error happened, show the error message to the user
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-container">
      {/* Safe navigation (?.) and slice to only show the first 10 products from the array */}
      {data?.slice(0, 10).map((product) => (
        <div key={product.id} className="card">
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
