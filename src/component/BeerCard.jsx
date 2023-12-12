// src/BeerCard.js
import React from 'react';

const BeerCard = ({ beer }) => (
  <div key={beer.id} className="beer-card">
    <img src={beer.image_url} alt={beer.name} />
    <h2>{beer.name}</h2>
    <p>{beer.tagline}</p>
    <p>{beer.description}</p>
  </div>
);

export default BeerCard;
