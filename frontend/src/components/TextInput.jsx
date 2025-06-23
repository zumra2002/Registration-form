const TextInput = ({ label, name, value, onChange, type = 'text', error }) => (
    <div style={{ marginBottom: '1rem' }}>
        <label>{label}</label><br />
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            style={{
                padding: '8px',
                width: '100%',
                border: error ? '1px solid red' : '1px solid #ccc',
                borderRadius: '4px',
                marginTop: '5px'
            }}
        />
        {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
    </div>
);

export default TextInput;
