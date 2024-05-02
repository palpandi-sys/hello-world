import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
     {/* <Greet name ='Paul'>
      <p>This is child component</p>
     </Greet>
     <Greet name ='Prathi'>
      <button>Action</button>
     </Greet>
     <Greet name = 'Rami' />
     <Welcome name='Paul'/>
     <Welcome name='Prathi'/>
     <Welcome name='Rami'/> */}
     {/* <Hello /> */}
    </div>
  );
}

export default App;
