import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() { //gets called first
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = e => {  //arrow functions auto get lexical scoping (bind the this context to where they were defined first - app component)
    this.setState({ searchField: e.target.value }); 
  }

  componentDidMount() { //lifecycle method
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  
  render() {
    const { monsters, searchField } = this.state; //get the monsters and searchField properties from state
    const filteredMonsters = monsters.filter( monster => //filter monsters based on if the name is in the searchfield
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} //same as e => this.handleChange
        /> 
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
