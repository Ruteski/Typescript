import React, {createContext} from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondeComponent'
import Destructoring, {Category} from './components/Destructoring'
import State from './components/State'

type textOrNull = string | null
type fixed = 'isso' | 'ou' | 'aquilo'

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  const name: string = 'Lincoln'
  const age: number = 38;
  const isWorking: boolean = true;

  const myText: textOrNull = "tem algum texto aqui";
  let mySecondText: textOrNull = null;

  //mySecondText = 'opa';

  const testandoFixed: fixed = 'isso';

  const userGreeting = (name: string): string => {
    return `Ola, ${name}`
  }

  const contextValue: IAppContext = { 
    language: 'javascript',
    framework: 'express',
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />

        <Destructoring 
          title='Segundo Post'
          content='Mais outro Conteudo'
          commentsQty={5}
          tags={['python']}
          category={Category.P}
        />

        <State />

        {myText && (
          <p>tem texto na variavel</p>
        )}

        {mySecondText && (
          <p>tem texto na variavel</p>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
