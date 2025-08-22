import { useEffect, useState } from 'react';
import ProductList from '../components/ProductsList';
import CategoryFilter from '../components/categoryFilter';

function Shop() {
  const [products, setProducts] = useState([]); //getting array of products
  const [categories, setCategories] = useState([]); //getting array of categories
  const [selectedCategory, setSelectedCategory] = useState(null); //categories selected
  const [searchWord, setSearchWord] = useState(""); //word used to search products by default is empty
  const [sortOrder, setSortOrder] = useState("asc"); //ascending default sort order

  // NEW STATES for creating products
  const [showAddForm, setShowAddForm] = useState(false); //toggle for showing/hiding form
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    imageURL: "",
    categoryId: null
  });

  //  Load Bootstrap only when on this page because there was some issues with using both tailwind and bootstrap
  useEffect(() => {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    document.head.appendChild(cssLink);

    const jsScript = document.createElement('script');
    jsScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(jsScript);

    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(jsScript);
    };
  }, []);

  // fetch product and categories from backend
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        console.log("Products without category:", data.filter(p => !p.category));
        setProducts(data);
      }); //using fetch to do an api call to backend
    //getting the response in json and then setting the json to the product state.

    fetch('http://localhost:8080/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data)); //using fetch to do an api call to backend
    //getting the response in json and then setting the json to the categories state.
  }, []);

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId ? Number(categoryId) : null);
  };
// a handle for deleting a product.
const handleRemoveProduct = (productId) => {
  fetch(`http://localhost:8080/api/products/${productId}`, {
    method: "DELETE"
  })
    .then((res) => {
      // Spring typically returns 204 No Content for deletes
      if (!res.ok && res.status !== 204) {
        throw new Error("Failed to delete");
      }
      // remove from UI state
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    })
    .catch((err) => console.error("Remove product error:", err));
};

  // Handle creating a new product
  const handleCreateProduct = () => {
    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      setProducts([...products, data]); // add the new product to state
      setShowAddForm(false);             // hide the form
      setNewProduct({                    // reset the form
        name: "",
        description: "",
        price: 0,
        imageURL: "",
        categoryId: null
      });
    })
    .catch(err => console.error(err));
  };

  // FILTERING and SORTING
  const filteredProducts = products
    .filter(product => { //filtering the products based on category then based on name searched
      return (
        (selectedCategory ? product.categoryId === selectedCategory : true)
        &&
        product.name.toLowerCase().includes(searchWord.toLowerCase())
      );
    })
    .sort((a, b) => { //using javascript array sorting
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <div className='container'>
      <h1 className='my-4'>Jewelry Shop</h1>

      {/* Search, Sort, Filter Row */}
      <div className='row align-items-center mb-4'>

        <div className='col-md-4 col-sm-12 mb-12'>
          <CategoryFilter categories={categories} onSelect={handleCategorySelect} />
        </div>

        <div className='col-md-5 col-sm-2 mb-2'>
          <input type="text"
            className='form-control'
            placeholder='Search For Products...'
            onChange={handleSearchChange}
          />
        </div>

        <div className='col-md-3 col-sm-2 mb-2'>
          <select className='form-control' onChange={handleSortChange}>
            <option value="asc">Sort By Price: Low to High</option>
            <option value="desc">Sort By Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* displaying products */}
      <div>
        {filteredProducts.length ? (
          <ProductList
            products={filteredProducts}
            onRemove={handleRemoveProduct}
          />
        ) : (
          <p>No Products Found</p>
        )}
      </div>

      {/* creating a new product */}
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-success"
          onClick={() => setShowAddForm(true)}
        >
          + Create New Product
        </button>
      </div>

      {/* a form for creating the product accepting the parameters */}
      {showAddForm && (
        <div className="card p-4 mb-4">
          <h4>Add New Product</h4>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2"
            value={newProduct.name}
            onChange={e => setNewProduct({...newProduct, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Description"
            className="form-control mb-2"
            value={newProduct.description}
            onChange={e => setNewProduct({...newProduct, description: e.target.value})}
          />
          <input
            type="number"
            placeholder="Price"
            className="form-control mb-2"
            value={newProduct.price}
            onChange={e => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="form-control mb-2"
            value={newProduct.imageURL}
            onChange={e => setNewProduct({...newProduct, imageURL: e.target.value})}
          />
          <select
            className="form-control mb-2"
            value={newProduct.categoryId || ""}
            onChange={e => setNewProduct({...newProduct, categoryId: Number(e.target.value)})}
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={handleCreateProduct}>Add Product</button>
            <button className="btn btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop;
