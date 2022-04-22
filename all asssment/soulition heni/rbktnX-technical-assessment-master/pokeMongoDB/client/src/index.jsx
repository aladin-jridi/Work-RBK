import React from 'react';
import ReactDOM from 'react-dom';

import Pokedex from './components/Pokedex.jsx';
import Pokedetails from './components/Pokedetails.jsx';
import axios from 'axios';
// import axios from '/axios';
/*
  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `App` component. 

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`. 
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'home'
  - If the view is set to 'pokedex', the `<Pokedex>` component is displayed
  - If the view is set to any other value, the `<Pokedetails>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  assessment. When you're ready, return to the README.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'pokedex',
      poke: [],
      pokemon: null,
      number: 0,
      name: '',
      types: '',
      imageUrl: ''
    };
    
    this.changeView = this.changeView.bind(this);
    this.fetchData = this.fetchData.bind(this);
    
  }
  fetchData() {
    axios.get('/api/pokemon').then(({data}) =>{
      this.setState({
        poke: data
      });
      console.log(this.state);

    });
  }
  componentDidMount() {

    this.fetchData();

  }


  changeView(option, pokemon) {
    this.setState({
      view: option,
      pokemon: pokemon
    });
    console.log(this.state);
  }
  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  renderView() {
    const { view } = this.state;
    if (view === 'pokedex') {
      return (
      <div>
        <p>name:</p><input name="name" onChange={this.onchange.bind(this)}/>
      <p>image:</p><input name="imageUrl" onChange={this.onchange.bind(this)} />
      <p>type:</p><input name="types" onChange={this.onchange.bind(this)}/>
      <p>number:</p><input name="number" onChange={this.onchange.bind(this)}/>
    <button onClick={this.add.bind(this)}>add</button>
      <Pokedex poke={this.state.poke} changeView={this.changeView} delete={this.delete.bind(this)} /> 
      </div>
      );
    } else {
      return <Pokedetails pokemon={this.state.pokemon} />;
    }
  }
  add() {
    axios.post('/api/pokemon', {
      number: this.state.number,
      name: this.state.name,
      types: this.state.types,
      imageUrl: this.state.imageUrl
    })
    .then(({data}) =>{
      this.setState({
        poke: data
      });
        
  
    }).then(()=>{ this.fetchData(); });
  }

  delete(_id) {
    axios.delete('/api/pokemon/' + _id)
    .then(() =>{ this.fetchData(); });
  }
  render() {
    return (
      <div>
            
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('pokedex')}>
            PokeMongoDB
          </span>
          <span className={this.state.view === 'pokedex'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('pokedex')}>
            See all Pokemons
          </span>
        </div>
        
        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('pokemongodb'));
