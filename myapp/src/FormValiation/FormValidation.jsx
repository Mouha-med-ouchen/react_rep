import { useEffect, useRef, useState } from "react"

export default function FormValidation() {

    const nameField = useRef();
    const emailField = useRef();
    const messageField = useRef();
    const countryField = useRef();
    const acceptConditonField = useRef();
    const [errors, setErrors] = useState([]);

    const ValidationForm = () => {
        const nameValue = nameField.current.value;
        const emailValue = emailField.current.value;
        const countryValue = countryField.current.value;
        const messageValue = messageField.current.value;
        const acceptValue = acceptConditonField.current.checked;

        let isFormValid = true;
        setErrors([]); // reset errors at the start

        if (nameValue.trim() === "") {
            setErrors(prev => [...prev, "Name Required!"]);
            isFormValid = false;
        }

        if (emailValue.trim() === "") {
            setErrors(prev => [...prev, "Email Required!"]);
            isFormValid = false;
        } else if (!emailValue.includes("@")) {
            setErrors(prev => [...prev, "Email not correct!"]);
            isFormValid = false;
        }

        if (messageValue.trim() === "") {
            setErrors(prev => [...prev, "Message Required!"]);
            isFormValid = false;
        }

        if (countryValue.trim() === "") {
            setErrors(prev => [...prev, "Country Required!"]);
            isFormValid = false;
        }

        if (!acceptValue) {
            setErrors(prev => [...prev, "You must accept all conditions!"]);
            isFormValid = false;
        }

        return isFormValid; // ✅ return validation result
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (ValidationForm()) {
            alert("Form submitted successfully ✅");

            nameField.current.value = "";
            emailField.current.value = "";
            messageField.current.value = "";
            countryField.current.value = "";
            acceptConditonField.current.checked = false;

            setErrors([]);
        }
    };



    return <>
        <div className="container mt-4">
            {errors.length > 0 && (
                <div className="alert alert-danger" role="alert">
                    <strong>Error:</strong>
                    <ul className="mt-2 mb-0">
                        {errors.map((error, key) => (
                            <li key={key}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <h2 className="mb-3 text-center">Simple React Form</h2>

            <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        ref={nameField}

                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        ref={emailField}


                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Message:</label>
                    <textarea
                        className="form-control"
                        name="message"
                        rows="3"
                        ref={messageField}

                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Country:</label>
                    <select
                        className="form-select"
                        name="country"
                        ref={countryField}


                    >
                        <option value="">-- Select your country --</option>
                        <option value="MA">Morocco 🇲🇦</option>
                        <option value="FR">France 🇫🇷</option>
                        <option value="US">USA 🇺🇸</option>
                        <option value="EG">Egypt 🇪🇬</option>
                        <option value="SA">Saudi Arabia 🇸🇦</option>
                    </select>
                </div>

                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="accept"
                        ref={acceptConditonField}


                    />
                    <label className="form-check-label">
                        I accept all terms and conditions
                    </label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>
    </>
}