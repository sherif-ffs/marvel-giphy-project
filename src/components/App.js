import React from 'react';
import axios from 'axios';
// import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'

import '../styles/App/main.css'
import MainView from './MainView'
import ToolBar from './ToolBar'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= { 
        trendingGifs: [],
        errorMessage: '',
        limit: 3
      }
    }

  PUBLIC_KEY = '&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0';
  BASE_URL = 'https://api.giphy.com/v1/gifs/trending?';
  ENDPOINT = 'search';


  componentDidMount() {
    this.getGifs()
  }

  loadMore = () => {
    scroll.scrollToBottom();
    this.setState({
      ...this.state,
      limit: this.state.limit += 3
    })
    this.componentDidMount()
    window.scrollTo({ bottom: document.body.scrollHeight, behavior: 'smooth' })
    
  }
  
  getGifs() {
       // axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0&limit=10`)
       axios.get(`${this.BASE_URL}${this.PUBLIC_KEY}&limit=${this.state.limit}`)
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
        <ToolBar></ToolBar>
        <MainView trendingGifs={this.state.trendingGifs.data} onClick={this.loadMore}></MainView>
      </div>
    );
  }
  
}

export default App;
