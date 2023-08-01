import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoArray from './components/TodoArray';


const App = () => {
  return (
    <div className="App">
      <InputForm />
      <TodoArray />
    </div>
  );
}

export default App;
