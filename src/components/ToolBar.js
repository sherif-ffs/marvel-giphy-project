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
        console.log('this.props: ', this.props)

        return (
            <React.Fragment>
            <section className="tool-bar">
                <h1 className="tool-bar__item title">Trending Gifs 🔥</h1>
                <SearchBar 
                    className="tool-bar__item search"
                    placeholder="Search giphy..."
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

// export default ToolBar
