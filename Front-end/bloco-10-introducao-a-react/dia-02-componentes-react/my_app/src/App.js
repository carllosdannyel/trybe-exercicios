import './App.css';
import Greeting from './Components/Greeting';
import Image from './Components/Image';
import React from 'react';
import Title from './Components/Title';
import Album from './Components/Album';
import UserProfile from './Components/UserProfile';
import Order from './Components/Order';
import albums from './Data/Albums';
import users from './Data/Users';
import products from './Data/Products';
// src/App.js

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
  //   const albums = [
  //   {
  //     image: 'https://ionicframework.com/docs/icons/logo-react-icon.png',
  //     title: 'Mylo Xyloto',
  //     releaseDate: {
  //       year: '2011',
  //       month: '10',
  //       day: '24',
  //     },
  //     others: {
  //       recordCompany: 'Capitol, Parlophone',
  //       formats: 'CD, digital'
  //     }
  //   },
  //   // Declaração do objeto contendo informações do album02
  //   {
  //     image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
  //     title: 'Ghost Stories',
  //     releaseDate: {
  //       year: '2014',
  //       month: '05',
  //       day: '16',
  //     },
  //     others: {
  //       recordCompany: 'Parlophone',
  //       formats: 'CD, digital'
  //     }
  //   }
  // ];

  //   const users = [
  //   {
  //     id: 102,
  //     name: "João",
  //     email: "joao@gmail.com",
  //     avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
  //   },
  //   {
  //     id: 77,
  //     name: "Amélia",
  //     email: "amelia@gmail.com",
  //     avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
  //   }
  // ];

  //   const products = [
  //   {
  //     id: 102,
  //     user: "cena@gmail.com",
  //     product: "Razer Headphone",
  //     price: {
  //       value: 99.99,
  //       currency: "dollars"
  //     }
  //   },
  //   {
  //     id: 77,
  //     user: "cena@gmail.com",
  //     product: "Monster 500mL",
  //     price: {
  //       value: 9.99,
  //       currency: "dollars"
  //     }
  //   }
  // ];

    // Retorno do que será renderizado
    return (
      <div className='App'>
        <div>
          <Greeting name="Front-Enders"/>
          <Title />
          <Image className='image' source="https://miro.medium.com/max/1400/1*vT4fCkknydeG480A-zZmTA.png" alternativeText="" />
          <hr />
        </div>
        <div>
          {albums.map((album) => <Album key={album.title} album={album} />)}
          {/* <Album album={album01} /> */}
          {/* <Album album={album02} /> */}
          <hr />
        </div>
        <div>
          {users.map((user) => <UserProfile key={user.name} user={user}/>)}
          {/* <UserProfile user={joao}/> */}
          {/* <UserProfile user={amelia}/> */}
          <hr />
        </div>
        <div>
        <h1> Orders recently created </h1>
        {products.map((product) => <Order key={product.product} order={product} />)}
        {/* <Order order={headphone} /> */}
        {/* <Order order={energyDrink} /> */}
        </div>
      </div>
    );
  }
}

export default App;
