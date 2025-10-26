import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "./HeroBanner";
import { motion } from "framer-motion";


export default function Main() {
    return (
        <>
            <HeroBanner></HeroBanner>

            <main className="py-5 bg-light">
                <div

                    className="container text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="fw-bold mb-4 text-primary">Welcome to My Website
                    </motion.h2>
                    <p className="text-muted mb-5">
                        Explore our latest collections and discover something amazing!
                    </p>

                    <div className="row g-4">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="col-md-4">
                            <div className="card shadow-sm border-0">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                                    className="card-img-top"
                                    alt="Product 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Modern Interior</h5>
                                    <p className="card-text text-muted">
                                        Elegant and stylish design for your living space.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}

                            className="col-md-4">
                            <div

                                className="card shadow-sm border-0">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                                    className="card-img-top"
                                    alt="Product 1"
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Smart Gadgets</h5>
                                    <p className="card-text text-muted">
                                        Discover the latest tech innovations for daily life.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}

                            className="col-md-4">
                            <div

                                className="card shadow-sm border-0">
                                <img
                                    src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=600&q=80"
                                    className="card-img-top"
                                    alt="Product 3"
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Creative Workspace</h5>
                                    <p className="card-text text-muted">
                                        Boost your productivity with beautiful setups.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Explore
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>


    );
}
