import { useEffect, useState } from 'react';
import ProductList from '../components/ProductsList';
import CategoryFilter from '../components/categoryFilter';

function Shop() {
  const [products, setProducts] = useState([]); //getting array of products
  const [categories, setCategories] = useState([]); //getting array of categories
  const [selectedCategory, setSelectedCategory] = useState(null); //categories selected
  const [searchWord, setSearchWord] = useState(""); //word used to search products by default is empty
  const [sortOrder, setSortOrder] = useState("asc"); //ascending default sort order

  //  Load Bootstrap CSS & JS only when on this page
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
      <div>
        {filteredProducts.length ? (
          //DISPLAY PRODUCTS
          <ProductList products={filteredProducts} />
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  )
}

export default Shop;