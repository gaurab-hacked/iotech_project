import React from 'react';
import Home from './components/Home';
import FormState from './context/FormState';



function App() {
  return (
    <FormState>
      <Home/>
    </FormState>
  );
}

export default App;
