import { useState, useMemo } from 'react';

// Mock Product Data
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Classic White Sneakers',
    price: 2499,
    category: 'Footwear',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 2,
    name: 'Modern Desk Lamp',
    price: 1299,
    category: 'Electronics',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 8999,
    category: 'Furniture',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1596162955024-873d122e2ad9?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 4999,
    category: 'Electronics',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 5,
    name: 'Minimalist Coffee Table',
    price: 3500,
    category: 'Furniture',
    rating: 3.9,
    image: 'https://images.unsplash.com/photo-1532423622396-10a3f979251a?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 6,
    name: 'Running Shoes - Midnight',
    price: 3200,
    category: 'Footwear',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 7,
    name: 'Smart Watch Series 5',
    price: 15999,
    category: 'Electronics',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 8,
    name: 'Leather Weekend Bag',
    price: 4500,
    category: 'Accessories',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [cartCount, setCartCount] = useState(0);

  // Extract unique categories for the filter dropdown
  const categories = useMemo(() => {
    return ['All', ...new Set(PRODUCTS_DATA.map((p) => p.category))];
  }, []);

  // Filter and Sort Logic
  const processedProducts = useMemo(() => {
    let filtered = PRODUCTS_DATA.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortOption === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortOption]);

  const addToCart = (productName) => {
    console.log(`Added to cart: ${productName}`);
    setCartCount((prev) => prev + 1);
    alert(`${productName} added to cart! Check console.`);
  };

  return (
    <>
      <header>
        <div className="logo">LuxeStore</div>
        <div className="cart-icon">
          🛒 Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </header>

      <main className="container">
        {/* Controls Section: Search, Filter, Sort */}
        <section className="controls">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </section>

        {/* Product Grid */}
        <section className="product-grid">
          {processedProducts.length > 0 ? (
            processedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-meta">
                    <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="product-rating">★ {product.rating}</span>
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product.name)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
              <h3>No products found matching your search.</h3>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
