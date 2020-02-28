import React from 'react';
import axios from 'axios';

import '../styles/main.css'
import MainView from './MainView'
import Form from './Form'

class App extends React.Component {
  state = {
    trendingGifs: [],
    errorMessage: ''
  }

  PUBLIC_KEY = '&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0';
  BASE_URL = 'https://api.giphy.com/v1/gifs/trending?';
  ENDPOINT = 'search';
  LIMIT = '&limit=6';
  // ${BASE_URL}${ENDPOINT}?q=${this.text}&limit=${LIMIT}&rating=${RATING}&offset=${this.offset}&api_key=${PUBLIC_KEY}


  componentDidMount() {
    this.getGifs()
  }

  getGifs() {
       // axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0&limit=10`)
       axios.get(`${this.BASE_URL}${this.PUBLIC_KEY}${this.LIMIT}`)
      .then(response => {
        if (response.data !== 'undefined') {
          this.setState({ trendingGifs: response.data});
        }
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }
  
  render() {
    return (
      <div className="App">
        <MainView trendingGifs={this.state.trendingGifs.data}></MainView>
      </div>
    );
  }
  
}

export default App;
