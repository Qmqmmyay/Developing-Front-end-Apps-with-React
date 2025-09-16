import { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { TotalCost } from  './TotalCost.jsx';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';


function ProductList({ onHomeClick }) {
    // Dùng view để quản lý nhiều màn hình: 'products', 'cart', 'checkout'
    const [currentView, setCurrentView] = useState('products');
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15",
                    quantity : 0
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12",
                    quantity : 0
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18",
                    quantity : 0
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20",
                    quantity : 0
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17",
                    quantity : 0
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14",
                    quantity : 0
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20",
                    quantity : 0
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18",
                    quantity : 0
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15",
                    quantity : 0
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12",
                    quantity : 0
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14",
                    quantity : 0
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22",
                    quantity : 0
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10",
                    quantity : 0
                },
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8",
                    quantity : 0
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20",
                    quantity : 0
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9",
                    quantity : 0
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20",
                    quantity : 0
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13",
                    quantity : 0
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14",
                    quantity : 0
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16",
                    quantity : 0
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13",
                    quantity : 0
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14",
                    quantity : 0
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15",
                    quantity : 0
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12",
                    quantity : 0
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25",
                    quantity : 0
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10",
                    quantity : 0
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15",
                    quantity : 0
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20",
                    quantity : 0
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18",
                    quantity : 0
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22",
                    quantity : 0
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        height: '68px', // Match height of cart icon
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setCurrentView('cart');
    };
    
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setCurrentView('products');
    };

    const handleContinueShopping = (e) => {
        // Thêm debug
        console.log("handleContinueShopping called", e);
        if (e) e.preventDefault();
        setCurrentView('products');
        console.log("Set view to products");
    };

    const totalCostValue = items.reduce((total, item) => {
        const costNumber = parseFloat(item.cost.replace('$', '')) || 0;
        return total + (costNumber * item.quantity);
    }, 0);
    
    // TotalCost component
    const TotalCost = ({ ItemsDisplay }) => {
        const [showOrderSuccess, setShowOrderSuccess] = useState(false);
        const [customerInfo, setCustomerInfo] = useState({
            name: '',
            email: '',
            address: '',
            phone: ''
        });
        
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
                <h2>Checkout</h2>
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
        ItemsDisplay: PropTypes.func.isRequired
    };
    
    // ItemsDisplay component with PropTypes
    const ItemsDisplay = ({ items }) => {
        return (
        <div className="display_box1">
            {items.length === 0 && <p>No items selected</p>}
            <table className="table_item_data">
            <thead>
                <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    const costNumber = parseFloat(item.cost.replace('$', '')) || 0;
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.cost}</td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>
                                ${(costNumber * item.quantity).toFixed(2)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
        );
    };

    ItemsDisplay.propTypes = {
        items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            cost: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
        ).isRequired
    };

    
    // Chuẩn bị sẵn cho tương lai
    const handleCheckout = () => {
        setCurrentView('checkout');
    };
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
                {currentView === 'cart' && (
                <CartItem 
                  onContinueShopping={handleContinueShopping}
                  onCheckout={handleCheckout}
                />
            )}

            {currentView === 'products' && (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <section className="product-category" key={index}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, idx) => {
                                    const isInCart = items.some(item => item.name === plant.name);
                                    return (
                                        <div className="product-card" key={idx}>
                                            <img src={plant.image} alt={plant.name} className="product-image" />
                                            <h3 className="product-name">{plant.name}</h3>
                                            <p className="product-description">{plant.description}</p>
                                            <p className="product-cost">{plant.cost}</p>
                                            <button className="add-to-cart-button" 
                                                    onClick={() => dispatch(addItem(plant))}
                                                    disabled={isInCart}>     
                                                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        
            {currentView === 'checkout' && (
                 <div className="total_amount_detail">
                    <TotalCost
                        items={items}
                        handleContinueShopping={handleContinueShopping}
                        ItemsDisplay={() => <ItemsDisplay items={items} />}
                    />
                </div>
            )}
        </div>
    );
}


export default ProductList;
