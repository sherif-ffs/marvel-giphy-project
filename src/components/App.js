import React from 'react';

import axios from 'axios';
import 'axios-progress-bar/dist/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'
import { animateScroll as scroll } from 'react-scroll'

import '../styles/App/main.css';

import MainView from './MainView'
import ToolBar from './ToolBar'

class App extends React.Component {

    state= { 
        trendingGifs: [],
        errorMessage: '',
        searchInput: '',
      }
    

  PUBLIC_KEY = '&api_key=MUeAc7ULK6t3nVn3qAxuoakuOvD1U6L0';
  BASE_URL = 'https://api.giphy.com/v1/gifs/';
  ENDPOINT = 'trending?';
  LIMIT = 3;
  SEARCHINPUT = '';
  getBySearch = false;

  // load trending gifs again on reset
  resetGifs = () => {
    axios.get(`${this.BASE_URL}${this.ENDPOINT}${this.PUBLIC_KEY}&limit=3`)
      .then(response => {
        if (response.data !== 'undefined') {
          loadProgressBar()
          this.LIMIT = 3;
          this.SEARCHINPUT = '';
          document.querySelector('.search').value = '';
          this.setState({ 
            trendingGifs: response.data,
            limit: 3,
            searchInput: ''
          });
          this.getBySearch = false;
        }
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }

  // search for gifs
  handleGifSearch = (searchInput) => {
    // check that searchinput is not empty
    if (searchInput.length > 0) {
      this.SEARCHINPUT = searchInput
      const url = `https://api.giphy.com/v1/gifs/search?q=${searchInput.replace(/\s/g, '+')}${this.PUBLIC_KEY}&limit=${this.LIMIT}`;
      // load new gifs based on search
      this.getGifsBySearch(url)
    } else {
        // if search input is empty reset to trending gifs
        this.resetGifs()
    }
  }

  componentDidMount() {
    this.getTrendingGifs()
  }

  // load 3 more gifs 
  loadMore = () => {
    scroll.scrollToBottom();
    this.LIMIT += 3
    if (!this.getBySearch) {
      this.getTrendingGifs()
    } else {
      this.getGifsBySearch()
    }
    window.scrollTo({ bottom: document.body.scrollHeight, behavior: 'smooth' })
  }
  
  // call to api for trending gifs
  getTrendingGifs() {
      axios.get(`${this.BASE_URL}${this.ENDPOINT}${this.PUBLIC_KEY}&limit=${this.LIMIT}`)
      .then(response => {
        if (response.data !== 'undefined') {
          // axios progress bar to show API call progress to user
          loadProgressBar()
          this.setState({ trendingGifs: response.data});
          this.getBySearch = false;
        }
      }).catch (error => {
        this.setState({ errorMessage: error.message });
      });
  }

  getGifsBySearch() {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${this.SEARCHINPUT.replace(/\s/g, '+')}${this.PUBLIC_KEY}&limit=${this.LIMIT}`)
      .then(response => {
        if (response.data !== 'undefined') {
          // axios progress bar to show API call progress to user
          loadProgressBar()
          this.setState({ 
            ...this.state,
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
        <ToolBar 
            onClick={this.move} 
            handleGifSearch={search => this.handleGifSearch(search)} 
            resetGifs={this.resetGifs}
            searchedGifs={this.getBySearch} 
            searchInput={this.SEARCHINPUT}
          >
        </ToolBar>
        <MainView 
          trendingGifs={this.state.trendingGifs.data} 
          onClick={this.loadMore} 
          searchInput={this.SEARCHINPUT}
          limit={this.LIMIT}
        >
        </MainView>
      </div>
    );
  }
  
}

export default App;
