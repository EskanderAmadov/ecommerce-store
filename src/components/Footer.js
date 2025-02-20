// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container text-center text-lg-start">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p className="small">
                            Welcome to our eCommerce store! Discover a wide range of products.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/all-products" className="text-white text-decoration-none">All Products</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="/cart" className="text-white text-decoration-none">View Cart</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <p className="small">
                            Email: amadov@mail.com<br />
                            Phone: +123 456 789<br />
                            Address: Oslo, Norway
                        </p>
                    </div>
                </div>
                <div className="text-center pt-3 border-top mt-3">
                    <p className="small mb-0">© 2024 Amadov Store</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
