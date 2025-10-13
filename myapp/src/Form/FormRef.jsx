import { useEffect, useRef, useState } from "react";

export default function Formref() {

    const inputNameRef = useRef();
    const inputAgeRef = useRef();
    const inputCountryRef = useRef();
    const inputAcceptConditionRef = useRef();

    const [preview, setPreview] = useState({});
    useEffect(() => {
        inputNameRef.current.value = 'Mohamed';
        inputAgeRef.current.value = 20;
        inputCountryRef.current.value = 'Morocco';
        inputAcceptConditionRef.current.checked = true;
        inputNameRef.current.focus();

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPreview({
            name: inputNameRef.current.value,
            age: inputAgeRef.current.value,
            country: inputCountryRef.current.value,
            accept: inputAcceptConditionRef.current.checked
        });
    };

    return (
        <div className="container mt-5">
            <h1>{(new Date()).toLocaleString()}</h1>
            <h2 className="text-center mb-4 text-primary">User Form</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light" >
                {/* Name */}
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        ref={inputNameRef}
                    />
                </div>

                {/* Age */}
                <div className="form-group mb-3">
                    <label htmlFor="age" className="form-label">Age:</label>
                    <input
                        type="number"
                        id="age"
                        className="form-control"

                        ref={inputAgeRef}
                    />
                </div>

                {/* Country Select */}
                <div className="form-group mb-3">
                    <label htmlFor="country" className="form-label">Country:</label>
                    <select
                        id="country"
                        className="form-select"
                        ref={inputCountryRef}
                        defaultValue='Marocco'
                    >
                        <option value="">Select your country</option>
                        <option value="Morocco">Morocco</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                    </select>
                </div>

                {/* Accept Rules */}
                <div className="form-check mb-4">
                    <input
                        type="checkbox"
                        id="accept"
                        className="form-check-input"
                        ref={inputAcceptConditionRef}
                    />
                    <label htmlFor="accept" className="form-check-label ms-2">
                        Accept Rules
                    </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>

            {/* Preview */}
            <div className="mt-4">
                <h5>Preview:</h5>
                <p><strong>Name:</strong> {preview.name}</p>
                <p><strong>Age:</strong> {preview.age}</p>
                <p><strong>Country:</strong> {preview.country}</p>
                <p><strong>Accepted Rules:</strong> {preview.accept ? "Yes" : "No"}</p>
            </div>
        </div>
    );
}
