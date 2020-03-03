import React from 'react';

import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar'
import '../styles/ToolBar/toolBar.css'

export default class ToolBar extends React.Component{

    state = { 
        searchInput: ''
    };

    render() {
        const {handleGifSearch, resetGifs} = this.props

        return (
            <React.Fragment>
            <section className="tool-bar">
                {/* <div className="tool-bar-titles-container"> */}
                    {/* <h1 className="tool-bar__item title">Giphy API</h1> */}
                    {/* <h1 className="tool-bar__item search-results">Results for "cats" 🤔</h1> */}
                    {/* <h1 className="tool-bar__item search-results">{`Results for "${this.state.searchInput}" 🤔`}</h1> */}
                    {/* <h1 className="tool-bar__item search-results">{this.state.searchInput.length > 0 
                        ? `Results for "${this.state.searchInput}" 🤔` 
                        : 'Trending Gifs 🔥' }
                    </h1> */}
                {/* </div> */}
                <SearchBar 
                    className="tool-bar__item search"
                    placeholder="Search for gifs..."
                    value={this.state.searchInput}
                    onChange={(newValue) => this.setState({ searchInput: newValue })}
                    onRequestSearch={() => handleGifSearch(this.state.searchInput)}
                ></SearchBar>
            <Button 
                className="tool-bar__item button"
                variant="contained" 
                color="primary" 
                onClick={resetGifs}
                >RESET Gifs
            </Button>
            </section>
            
            </React.Fragment>
        )
    }
}

