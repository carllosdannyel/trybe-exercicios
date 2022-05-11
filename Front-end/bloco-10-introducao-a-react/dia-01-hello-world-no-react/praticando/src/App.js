import './App.css';
import ReactDOM from 'react-dom';

function App() {

function tick() {
  const element = (
    <div className="App">
      <h1>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
  // const textJSX = "Hello, JSX"
  return (
    <>{tick}</>
  );
}

export default App;
