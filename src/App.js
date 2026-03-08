import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    // products and orders start as empty lists
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch products
        axios.get('http://localhost:5001/products')
            .then(res => setProducts(res.data))
            .catch(err => setError("Failed to load products. Please try again."));
    }, []);

    const createOrder = (product_id, total_price) => {
        axios.post('http://localhost:5002/orders', {
            product_id: product_id,
            quantity: 1,
            total_price: total_price
        })
            .then(res => {
                alert('Order created!');
                setOrders([...orders, res.data]);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>E-Commerce Store</h1>
            <h2>Products</h2>
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h3>{product.item}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => createOrder(product.id, product.price)}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;