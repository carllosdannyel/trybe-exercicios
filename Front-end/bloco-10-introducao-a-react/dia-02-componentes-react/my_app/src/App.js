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

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Greeting name="Front-Enders"/>
        <Title />
        <Image source="https://miro.medium.com/max/1400/1*vT4fCkknydeG480A-zZmTA.png" alternativeText="" />
        <hr />
        {albums.map((album) => <Album key={album.title} album={album} />)}
        <hr />
        {users.map((user) => <UserProfile key={user.name} user={user}/>)}
        <hr />
        <h1> Orders recently created </h1>
        {products.map((product) => <Order key={product.product} order={product} />)}
      </div>
    );
  }
}

export default App;
