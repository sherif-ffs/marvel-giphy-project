import React from 'react';
import axios from 'axios';
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'

import { animateScroll as scroll } from 'react-scroll'

import '../styles/App/main.css'
import MainView from './MainView'
import ToolBar from './ToolBar'

class App extends React.Component {

    state= { 
        trendingGifs: [],
        errorMessage: '',
        limit: 3,
        searchInput: '',
      }
    

  PUBLIC_KEY = '&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0';
  BASE_URL = 'https://api.giphy.com/v1/gifs/';
  ENDPOINT = 'trending?';
  QUERY = `search?q=${this.state.searchInput}`;

  getBySearch = false;

  resetGifs = () => {
    axios.get(`${this.BASE_URL}${this.ENDPOINT}${this.PUBLIC_KEY}&limit=3`)
      .then(response => {
        if (response.data !== 'undefined') {
          loadProgressBar()
          this.setState({ 
            trendingGifs: response.data,
            limit: 3
          });
          this.getBySearch = false;
        }
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }

  handleGifSearch = (searchInput) => {
    if (searchInput.length > 0) {
      this.setState({ searchInput: searchInput }, () => {
        console.log("this.state", this.state);
      });     
      this.getGifsBySearch()
    } else {
      this.getTrendingGifs()
    }
  }

  componentDidMount() {
    this.getTrendingGifs()
  }

  loadMore = () => {
    scroll.scrollToBottom();
    this.setState({
      ...this.state,
      limit: this.state.limit += 3
    })
    // this.componentDidMount()
    if (!this.getBySearch) {
      this.getTrendingGifs()
    } else {
      this.getGifsBySearch()
    }
    window.scrollTo({ bottom: document.body.scrollHeight, behavior: 'smooth' })
  }
  
  getTrendingGifs() {
      axios.get(`${this.BASE_URL}${this.ENDPOINT}${this.PUBLIC_KEY}&limit=${this.state.limit}`)
      .then(response => {
        if (response.data !== 'undefined') {
          loadProgressBar()
          this.setState({ trendingGifs: response.data});
          this.getBySearch = false;
        }
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }

  getGifsBySearch() {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0&limit=${this.state.limit}`)
      .then(response => {
        if (response.data !== 'undefined') {
          loadProgressBar()
          this.setState({ 
            trendingGifs: response.data
          });
          this.getBySearch = true;
        }
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }
  render() {
    return (
      <div className="App">
        <ToolBar onClick={this.move} handleGifSearch={search => this.handleGifSearch(search)} resetGifs={this.resetGifs}></ToolBar>
        <MainView trendingGifs={this.state.trendingGifs.data} onClick={this.loadMore}></MainView>
      </div>
    );
  }
  
}

export default App;
