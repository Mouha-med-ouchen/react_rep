import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <p className="mb-1">
                    &copy; {new Date().getFullYear()} <strong>My Website</strong>. All rights reserved.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-white-50 text-decoration-none">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-white-50 text-decoration-none">
                        Terms of Service
                    </a>
                    <a href="#" className="text-white-50 text-decoration-none">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
