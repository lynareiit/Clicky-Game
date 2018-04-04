import React, { Component } from 'react';
import Navbar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import Footer from "./components/Footer/footer.js";
import bands from "./bands.json";
import BandCard from "./components/Body/bands.js";
import Wrapper from "./components/Wrapper/index.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    game: false,
    score: 0,
    topScore: 0,
    clicks: [],
    cats: Cats
    }

    // componentDidMount() to load the data from the endpoint
    componentDidMount() {
    }

  // shuffle kitties array in a this.state
  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array [i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  reorderImages = id => {
    if(this.state.clicks.includes(id)) {
      this.setState({ score: 0, clicks: []});
    } else {
      if(this.state.score + 1 > this.state.topscore) {
        this.setState({
          topScore: this.state.score + 1
        })
      }
      this.state.clicks.push(id)
      this.sestState({ score: this.state.score + 1});
    }
  };

  render() {
    return(
      <div>
        <h1 ={this.state.score} topScore = {this.state.topScore}/>
      </div>
    
    );
  } 
}

export default App;
