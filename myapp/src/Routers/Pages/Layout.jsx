import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top mt-0">
                <div className="container justify-content-center ">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid w-75 mx-auto">
                <Outlet>

                </Outlet>
            </div>

        </>
    )
}
