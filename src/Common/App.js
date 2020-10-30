import React,{Component} from 'react';
import CardSection from './CardSection';
import SearchBox from './SearchBox';
import {robots} from './Robot';
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state=({robots:robots, searchfield:''});
  }
  onSearchField = (event) =>
  {
    this.setState({searchfield: event.target.value});
  };
    render(){
      const filteredRobot = this.state.robots.filter( (robots) =>{
            return robots.name.toLowerCase().includes( this.state.searchfield.toLowerCase())
    });
      return(
            <div className='tc'>
              <h1 className='f1'>Robofriends</h1>
              <SearchBox onsearch={this.onSearchField}/>
              <CardSection robots={filteredRobot}/>
            </div>
      );
    }
}
export default App;
