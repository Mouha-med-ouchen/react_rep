import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className="container py-5">
            {/* العنوان */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">About Us</h1>
                <p className="text-muted">Learn more about who we are and what we do</p>
            </div>

            {/* المحتوى الرئيسي */}
            <div className="row align-items-center">
                {/* الصورة */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Team"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* النص */}
                <div className="col-md-6">
                    <h3 className="fw-semibold mb-3">Our Mission</h3>
                    <p className="text-secondary">
                        At <strong>IssamFood</strong>, our mission is to deliver fresh, delicious, and
                        high-quality products directly to our customers. We believe in excellence,
                        innovation, and a customer-first philosophy that makes every experience unique.
                    </p>

                    <p className="text-secondary">
                        Founded in 2023, we’ve grown from a small local store into a trusted brand that
                        values community, sustainability, and quality above all else.
                    </p>

                    <button className="btn btn-primary mt-3">Learn More</button>
                </div>
            </div>

            {/* قسم الفريق */}
            <div className="mt-5 text-center">
                <h3 className="fw-bold mb-4">Our Amazing Team</h3>
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                className="card-img-top"
                                alt="CEO"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Mohamed Ouchen</h5>
                                <p className="card-text text-muted">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                className="card-img-top"
                                alt="Manager"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Sara El Amrani</h5>
                                <p className="card-text text-muted">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
