import React from 'react';
import './ProductList.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

const PRODUCTS = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
];

const ProductList = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);

    return (
        <div className="product-list">
            <h2 className="product-list-title">Products</h2>
            <ul className="product-list-items">
                {PRODUCTS.map(product => {
                    const isInCart = items.some(item => item.id === product.id);
                    return (
                        <li key={product.id} className="product-list-item">
                            <span className="product-list-item-name">{product.name}</span>
                            <span className="product-list-item-price">${product.price}</span>
                            <button 
                                className="product-list-item-button" 
                                onClick={() => dispatch(addToCart(product))}
                                disabled={isInCart}
                            >
                                {isInCart ? 'In Cart' : 'Add to Cart'}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductList;
