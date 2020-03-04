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
                        >
                    RESET Gifs
                    </Button>
                </section>
            </React.Fragment>
        )
    }
}

