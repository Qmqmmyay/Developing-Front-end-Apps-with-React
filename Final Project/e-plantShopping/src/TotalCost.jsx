import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./TotalCost.css";

export const TotalCost = ({ ItemsDisplay, handleContinueShopping, items }) => {
    const [showOrderSuccess, setShowOrderSuccess] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });
    
    // Calculate total cost of all items
    const totalCostValue = items.reduce((total, item) => {
        const costNumber = parseFloat(item.cost.replace('$', '')) || 0;
        return total + (costNumber * item.quantity);
    }, 0);
    
    const handlePlaceOrder = () => {
        setShowOrderSuccess(true);
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo({
            ...customerInfo,
            [name]: value
        });
    };
    
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    
    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <div className="order-summary">
                <h3>Order Summary</h3>
                {ItemsDisplay && ItemsDisplay()}
                <div className="total-section">
                    <h3>Total: ${totalCostValue.toFixed(2)}</h3>
                </div>
            </div>
            
            <div className="customer-info">
                <h3>Customer Information</h3>
                <div className="form-group">
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea 
                        name="address"
                        value={customerInfo.address}
                        onChange={handleInputChange}
                        placeholder="Enter your delivery address"
                    />
                </div>
            </div>
            
            <div className="checkout-buttons">
                <button 
                    className="continue-shopping-button"
                    onClick={handleContinueShopping}
                >
                    Continue Shopping
                </button>
                <button 
                    className="place-order-button"
                    onClick={handlePlaceOrder}
                    disabled={items.length === 0}
                >
                    Place Order
                </button>
            </div>
            
            {showOrderSuccess && (
                <div className="order-success-modal">
                    <div className="modal-content">
                        <div className="success-icon">✓</div>
                        <h2>Order Placed Successfully!</h2>
                        <div className="order-details">
                            <p><strong>Items ordered:</strong> {totalItems} plants</p>
                            <p><strong>Total amount:</strong> ${totalCostValue.toFixed(2)}</p>
                            <p><strong>Customer:</strong> {customerInfo.name}</p>
                            <p><strong>Delivery address:</strong> {customerInfo.address}</p>
                        </div>
                        <p>Thank you for shopping with Paradise Nursery!</p>
                        <button onClick={() => {
                            setShowOrderSuccess(false);
                            handleContinueShopping();
                        }}>
                            Return to Shopping
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

TotalCost.propTypes = {
    ItemsDisplay: PropTypes.func.isRequired,
    handleContinueShopping: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};