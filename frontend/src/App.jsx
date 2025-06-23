import { useState } from 'react';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';

function App() {
  const [form, setForm] = useState(1);

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem' }}>
      <h1>Registration Form</h1>
      <div style={{ marginBottom: '1rem' }}>Step {form} of 2</div>
      {form === 1 && <Form1 next={() => setForm(2)} />}
      {form === 2 && <Form2 />}
    </div>
  );
}

export default App;

