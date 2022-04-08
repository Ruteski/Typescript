import React from 'react';

function App() {
  const name: string = 'Lincoln'
  const age: number = 38;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && (
        <p>Esta trabalhando</p>
      )}
    </div>
  );
}

export default App;
