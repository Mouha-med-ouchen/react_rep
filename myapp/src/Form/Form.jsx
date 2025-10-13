import { useState } from "react";

export default function Form() {
    const [formValues, setFormValues] = useState({
        name: "",
        age: "",
        accept: false,
        country: ""  
    });

    const handleChange = (e) => {
        const id = e.currentTarget.id;
        const value = e.currentTarget.type === "checkbox"
            ? e.currentTarget.checked
            : e.currentTarget.value;

        setFormValues(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form values:", formValues);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-primary">User Form</h2>
            <form className="border p-4 rounded shadow-sm bg-light" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Age */}
                <div className="form-group mb-3">
                    <label htmlFor="age" className="form-label">Age:</label>
                    <input
                        type="number"
                        id="age"
                        className="form-control"
                        value={formValues.age}
                        onChange={handleChange}
                    />
                </div>

                {/* Country Select */}
                <div className="form-group mb-3">
                    <label htmlFor="country" className="form-label">Country:</label>
                    <select
                        id="country"
                        className="form-select"
                        value={formValues.country}
                        onChange={handleChange}
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
                        checked={formValues.accept}
                        onChange={handleChange}
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
                <p><strong>Name:</strong> {formValues.name}</p>
                <p><strong>Age:</strong> {formValues.age}</p>
                <p><strong>Country:</strong> {formValues.country}</p>
                <p><strong>Accepted Rules:</strong> {formValues.accept ? "Yes" : "No"}</p>
            </div>
        </div>
    );
}
