import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from './components/NavBar';
import CardList from './components/CardList';
import { CardDeck } from 'react-bootstrap';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    restaurants();
  }, [])

  const restaurants = async() => {
    const response = await fetch('https://developers.zomato.com/api/v2.1/search?entity_id=5&entity_type=city&q=pune', { method: 'GET', headers: { 'user-key': 'a6be147d5c6ca9b4eab73f818717115a' } });
    const data = await response.json();
    console.log(data);
    setItems(data.restaurants);
  }

  return(
    <div>
      <Navigation/>
      <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
        <CardList restaurantList={items} style={{flex: 1}}/>
      </CardDeck>
    </div>
  );
}
export default Home;
