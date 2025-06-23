import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import { validateStep1 } from '../utils/validation';

// ✅ Inline TextInput component
const TextInput = ({ label, name, value, onChange, error }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label
                htmlFor={name}
                style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#2c3e50' }}
            >
                {label}
            </label>
            <input
                id={name}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: error ? '1px solid red' : '1px solid #ccc',
                    fontSize: '14px',
                }}
            />
            {error && (
                <p style={{ color: 'red', marginTop: '5px', fontSize: '13px' }}>{error}</p>
            )}
        </div>
    );
};

const Step1 = ({ next }) => {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        const validationErrors = validateStep1(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) next();
    };

    // 🌌 Full page + body coverage
    const wrapperStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerStyle = {
        width: '100%',
        maxWidth: '500px',
        padding: '30px',
        backgroundColor: '#f0f9ff', // Light non-white color
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    };

    const headingStyle = {
        fontSize: '36px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '30px',
        textAlign: 'center',
        textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
    };

    const formHeadingStyle = {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#2c3e50',
        textAlign: 'center',
    };

    const buttonStyle = {
        display: 'block',
        width: '100%',
        padding: '12px',
        marginTop: '25px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    };

    return (
        <div style={wrapperStyle}>
            <h1 style={headingStyle}>Registration Form</h1>
            <div style={containerStyle}>
                <h2 style={formHeadingStyle}>Step 1: Personal Information</h2>
                <TextInput
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                />
                <TextInput
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextInput
                    label="Phone (Optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <button
                    style={buttonStyle}
                    onClick={handleNext}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;
