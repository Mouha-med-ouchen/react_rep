import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/UseFetch";

export default function UsersList() {

    const [users, loading] = useFetch('https://jsonplaceholder.typicode.com/users')

    if (loading) return <p className="alert alert-danger text-center mt-5">⏳ Loading data, please wait 5 seconds...</p>;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-secondary">👥 User Directory</h2>
            <div className="row">
                {users.map((user) => (
                    <div key={user.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-lg h-100 user-card border-0">
                            {/* Custom Header for a modern look */}
                            <div className="card-header-custom p-3 rounded-top d-flex align-items-center">
                                <i className="bi bi-person-circle me-3 fs-4 text-white"></i>
                                <h5 className="mb-0 text-white fw-bold">{user.name}</h5>
                            </div>
                            <div className="card-body">
                                {/* Better layout for the main info */}
                                <div className="d-flex flex-column">
                                    <div className="mb-2">
                                        <i className="bi bi-tag-fill text-muted me-2"></i>
                                        <span className="fw-semibold">@{user.username}</span>
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-envelope-fill text-info me-2"></i>
                                        <span className="small text-truncate">{user.email}</span>
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-telephone-fill text-success me-2"></i>
                                        <span className="small">{user.phone}</span>
                                    </div>
                                    <div className="mb-2">
                                        <i className="bi bi-globe me-2" style={{ color: '#ffc107' }}></i>
                                        <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-decoration-none">
                                            {user.website}
                                        </a>
                                    </div>
                                    <div className="pt-2 border-top mt-2">
                                        <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                        <span className="text-dark fw-medium">{user.address.city}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
