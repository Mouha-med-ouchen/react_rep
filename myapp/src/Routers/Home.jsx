import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            {/* قسم البانر (Hero Section) */}
            <div className=" text-light text-center py-5 welcom">
                <div className="container welcom">
                    <h1 className="display-4 fw-bold">Welcome to <span className="text-primary">IssamFood</span></h1>
                    <p className="lead mt-3 mb-4">
                        Fresh. Delicious. Delivered with love 💙
                    </p>
                    <a href="#products" className="btn btn-primary btn-lg px-4">Explore Products</a>
                </div>
            </div>

            {/* قسم المميزات */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary">Why Choose Us?</h2>
                    <p className="text-muted">We’re passionate about delivering the best food experience</p>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm p-4">
                            <i className="bi bi-bag-check-fill text-primary fs-1 mb-3"></i>
                            <h5>Quality Ingredients</h5>
                            <p className="text-muted">We source only the freshest and highest-quality products.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm p-4">
                            <i className="bi bi-truck text-primary fs-1 mb-3"></i>
                            <h5>Fast Delivery</h5>
                            <p className="text-muted">Your order arrives quickly and always on time.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card border-0 shadow-sm p-4">
                            <i className="bi bi-heart-fill text-primary fs-1 mb-3"></i>
                            <h5>Customer Care</h5>
                            <p className="text-muted">We’re here for you — 24/7 support with a smile 😊</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* قسم المنتجات أو العروض */}
            <div id="products" className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold text-dark mb-4">Popular Products</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" className="card-img-top" alt="Burger" />
                                <div className="card-body">
                                    <h5 className="card-title">Classic Burger</h5>
                                    <p className="card-text text-muted">Juicy and full of flavor 🍔</p>
                                    <button className="btn btn-primary btn-sm">Order Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1565958011705-44e211b5f3f9" className="card-img-top" alt="Pizza" />
                                <div className="card-body">
                                    <h5 className="card-title">Cheese Pizza</h5>
                                    <p className="card-text text-muted">Crispy, cheesy perfection 🍕</p>
                                    <button className="btn btn-primary btn-sm">Order Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" className="card-img-top" alt="Salad" />
                                <div className="card-body">
                                    <h5 className="card-title">Fresh Salad</h5>
                                    <p className="card-text text-muted">Healthy & refreshing 🥗</p>
                                    <button className="btn btn-primary btn-sm">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* قسم الختام */}
            <footer className="bg-dark text-light text-center py-3 mt-5">
                <p className="mb-0">© {new Date().getFullYear()} IssamFood. All rights reserved.</p>
            </footer>
        </div>
    );
}
