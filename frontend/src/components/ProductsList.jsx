import React from 'react';

const ProductList = ({ products, onAdd, onRemove }) => {
    return (
        <div className="row">
            {products.map(product => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                    <div className="card h-100">
                        {/* Product Image */}
                        <img
                            src={product.imageURL || 'https://placehold.co/600x400'}
                            alt={product.name}
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }} // optional: uniform height
                        />
                        <div className="card-body d-flex flex-column">
                            {/* Product Name */}
                            <h5 className="card-title">{product.name}</h5>
                            {/* Product Description */}
                            <p className="card-text">{product.description}</p>
                            {/* Product Price */}
                            <p className="card-text"><strong>${product.price}</strong></p>
                            {/* Category Name */}
                            {product.categoryName && (
                                <p className="card-text text-muted">Category: {product.categoryName}</p>
                            )}

                            {/* Add / Remove Buttons */}
                            <div className="mt-auto d-flex gap-2">

                                <button
                                    className="btn btn-danger flex-fill"
                                    onClick={() => onRemove && onRemove(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
