import React from 'react';

function App() {
  const name: string = 'Lincoln'
  const age: number = 38;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Ola, ${name}`
  }

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && (
        <p>Esta trabalhando</p>
      )}

      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
