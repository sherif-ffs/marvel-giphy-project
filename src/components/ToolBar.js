import React from 'react';

import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar'

import '../styles/ToolBar/toolBar.css'

export default class ToolBar extends React.Component{

    state = { 
        searchInput: ''
    };

    render() {
        return (
            <React.Fragment>
            <section className="tool-bar">
                <h1 className="tool-bar__item title">Trending Gifs 🔥</h1>
                <SearchBar 
                    className="tool-bar__item search"
                    placeholder="Search giphy..." 
                ></SearchBar>
            <Button 
                className="tool-bar__item button"
                variant="contained" 
                color="primary" 
                >RESET
            </Button>
            </section>
            
            </React.Fragment>
        )
    }
}

// export default ToolBar
