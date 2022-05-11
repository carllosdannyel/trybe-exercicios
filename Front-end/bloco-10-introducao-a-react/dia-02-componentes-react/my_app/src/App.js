import './App.css';
import Greeting from './Components/Greeting';
import Image from './Components/Image';

function App() {
  return (
    <div className="App">
      <Greeting name="Carlos Daniel"/>
      <hr />
      <Image source="https://alonza.com.br/wp-content/uploads/2021/07/react-native.png" alternativeText="imagem react"/>
    </div>
  );
}

export default App;
