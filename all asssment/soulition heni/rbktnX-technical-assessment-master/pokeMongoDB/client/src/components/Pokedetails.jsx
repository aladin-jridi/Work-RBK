import React from 'react';

const Pokedetails = (props) => (
 
  <div>
  <div>Pokemon details</div>
  <h3>{props.pokemon.name}</h3>
  <img src={props.pokemon.imageUrl}/>
  <h3>{props.pokemon.number}</h3>
  <h3>{props.pokemon.types}</h3>
  </div>
);

export default Pokedetails;
