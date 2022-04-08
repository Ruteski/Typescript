import React from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondeComponent'
import Destructoring from './components/Destructoring'


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
      <FirstComponent />
      <SecondComponent name="Segundo" />
      
      <Destructoring 
        title='Primeiro Post'
        content='Algum Conteudo'
        commentsQty={10}
        tags={['ts', 'js']}
      />

      <Destructoring 
        title='Segundo Post'
        content='Mais outro Conteudo'
        commentsQty={5}
        tags={['python']}
      />
    </div>
  );
}

export default App;
