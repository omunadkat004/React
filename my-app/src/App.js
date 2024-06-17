import logo from './logo.svg';
import { useState } from 'react';
import navbar from './navbar';
import React from 'react';


function App()
{
  const [value, setValue] = useState(0)

  return
  (
<div className = "app">
  <navbar/>
<div className='value'>{value}</div>
<button onClick={() => {setValue(value +1)}}> click me</button>
 
</div>
  );
}
export default App ;