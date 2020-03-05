import React from 'react';

import Gif from './Gif';
import { motion } from "framer-motion";
import Button from '@material-ui/core/Button';
import '../styles/MainView/mainView.css'


const container = {
    hidden: { opacity: 1, scale: .9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
  };

class MainView extends React.Component {

    // option for users to scroll back to top to improve UX
    scrollToTop = () => {
        window.scrollTo(0,0);
    }

    render() {
        let gifs = this.props.trendingGifs;
        let limit = this.props.limit;

        console.log('this.props: ', this.props)
        console.log('this.props.searchInput: ', this.props.searchInput)
        let trendingGifs;

        if (typeof gifs !== 'undefined') {
            console.log('gifs: ', gifs)
            trendingGifs = gifs.map(gif => {
                    return(
                        <Gif 
                            className="item"
                            variants={item}
                            title={gif.title}
                            activeUrl={gif.images.original.webp}
                            stillUrl={gif.images.fixed_height_still.url}
                        >
                        </Gif>
                    )
            })
        }
        // return message if there are no results returned
        if (typeof gifs !== 'undefined') {
            if (gifs.length === 0) {
                return (
                    <React.Fragment>
                        <section className="main-view">
                            <h1 className="search-results">{`No results returned for ${this.props.searchInput} 😭`}</h1>
                        </section>>
                    </React.Fragment>
                )
            }
        }
        // if limit is more than 3 render button to scroll back to the top
        if (limit > 3 ) {
            return (
                <React.Fragment>
                <section className="main-view">
                    {/* update text based on whether text is showing search results or trending gifs */}
                    <h1 className="search-results">{this.props.searchInput.length > 0 
                        ? `Search Results for "${this.props.searchInput}" 🤔` 
                        : 'Trending Gifs 🔥' }
                    </h1>
                    <motion.div 
                        className="container"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {trendingGifs}
                    </motion.div>
                    <Button 
                        onClick={this.props.onClick} 
                        variant="contained" 
                        color="primary" 
                        className="gif-container__button"
                    >
                    Load More Gifs
                    </Button>
                    <Button 
                        onClick={this.scrollToTop} 
                        variant="contained" 
                        color="secondary" 
                        className="gif-container__button return-to-top"
                    >
                    Back to top
                    </Button>          
                </section>
            </React.Fragment>
            )
        } 
        // if there are not more that 3 items dont render button to scroll back to the top
        else {
            return(
                <React.Fragment>
                    <section className="main-view">
                        {/* update text based on whether text is showing search results or trending gifs */}
                        <h1 className="search-results">{this.props.searchInput.length > 0 
                            ? `Search Results for "${this.props.searchInput}" 🤔` 
                            : 'Trending Gifs 🔥' }
                        </h1>
                        <motion.div 
                            className="container"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {trendingGifs}
                        </motion.div>
                        <Button 
                            onClick={this.props.onClick} 
                            variant="contained" 
                            color="primary" 
                            className="gif-container__button"
                        >
                        Load More Gifs
                        </Button>
                    </section>
                </React.Fragment>
            )
        }
         
    }
}

export default MainView