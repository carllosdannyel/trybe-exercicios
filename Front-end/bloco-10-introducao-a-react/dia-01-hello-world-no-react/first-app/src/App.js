import logo from './logo.svg';
import './App.css';

const arrayOfLis = ['Javascript', 'CSS', 'HTML', 'Jest', 'React'];

const OneAndTwo = 'Exercícios 1 e 2 concluídos com sucesso';

const Task = (value) => {
  const allLis = value.map((li) => <li>{li}</li>);
  return allLis;
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ul>{Task(arrayOfLis)}</ul>
        <p>{OneAndTwo}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
