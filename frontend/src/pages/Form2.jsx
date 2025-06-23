import { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import { validateStep2 } from '../utils/validation';
import { registerUser } from '../services/registerService';

// ✅ Inline TextInput
const TextInput = ({ label, name, value, onChange, error, type = 'text' }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label
                htmlFor={name}
                style={{
                    display: 'block',
                    marginBottom: '6px',
                    fontWeight: '500',
                    color: '#2c3e50',
                }}
            >
                {label}
            </label>
            <input
                id={name}
                type={type}
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
                <p
                    style={{
                        color: 'red',
                        marginTop: '5px',
                        fontSize: '13px',
                    }}
                >
                    {error}
                </p>
            )}
        </div>
    );
};

const Step2 = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const validationErrors = validateStep2(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await registerUser(formData);
                setStatus('✅ Registration successful!');
            } catch (err) {
                console.error(err);
                setStatus('❌ Registration failed.');
            }
        }
    };

    // 🖼 Full screen fixed background
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
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerStyle = {
        width: '100%',
        maxWidth: '500px',
        padding: '30px',
        backgroundColor: '#f0f9ff', // Light blue tone
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    };

    const headingStyle = {
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
        backgroundColor: '#27ae60',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    };

    const statusStyle = {
        textAlign: 'center',
        marginTop: '15px',
        fontWeight: '500',
        color: status.startsWith('✅') ? 'green' : 'red',
    };

    return (
        <div style={wrapperStyle}>
            <div style={containerStyle}>
                <h2 style={headingStyle}>Step 2: Security</h2>
                <TextInput
                    type="password"
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <TextInput
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                />
                <button
                    style={buttonStyle}
                    onClick={handleSubmit}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = '#219150')
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = '#27ae60')
                    }
                >
                    Submit
                </button>
                {status && <p style={statusStyle}>{status}</p>}
            </div>
        </div>
    );
};

export default Step2;
