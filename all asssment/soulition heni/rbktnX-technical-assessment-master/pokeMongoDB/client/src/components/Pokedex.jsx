import React from 'react';

const Pokedex = (props) => (
  <div>
    <ul className="pokemon-list">
      {props.poke.map((pokemon, i)=>(
        <li key={i} className="pokemon-list-item">
        <h3 onClick={()=>{ props.changeView('', pokemon); }}>{pokemon.name}</h3>
        <img src={pokemon.imageUrl}/>
  <button onClick={()=>{ props.delete(pokemon._id); }}>delete</button>
      
      </li>
))}
    </ul>
    
  </div>
);

export default Pokedex;
