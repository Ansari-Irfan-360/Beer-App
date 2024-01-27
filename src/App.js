// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BeerCard from './component/BeerCard';

const API_URL = 'https://api.punkapi.com/v2/beers';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer App</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search beers"
        value={searchTerm}
        onChange={handleSearch}
      />
      <hr />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
