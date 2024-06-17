import React, { useState } from 'react';
import Navbar from './navbar'; // Make sure the component name is capitalized

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <div className='value'>{value}</div>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
}

export default App;
