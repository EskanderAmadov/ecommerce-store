import React, { useEffect } from 'react';

const CheckoutSuccessPage = ({ clearCart }) => {
    useEffect(() => {
        clearCart(); 
    }, [clearCart]);

    return (
        <div className="container mt-5 text-center">
            <h1>Order Successful!</h1>
            <p>Thank you for your purchase. Your order has been placed successfully.</p>
            
            <button 
                className="btn btn-primary mt-4"
                onClick={() => window.location.href = '/'}
            >
                Back to Store 
            </button>
        </div>
    );
};

export default CheckoutSuccessPage;
