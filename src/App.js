import React, { Component } from 'react';
import './App.css';
import './components/card-list/card-list.component';
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monster: [],
      searchfield:''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster : users})
    );
  }
  render() {
    const { monster, searchfield  } = this.state;
    const filteredmonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
        
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handlechange = {e => this.setState({searchfield : e.target.value})}
          />
        <Cardlist monster= {filteredmonsters} >

        </Cardlist>
    </div>
    ) 
  }
}

export default App;
