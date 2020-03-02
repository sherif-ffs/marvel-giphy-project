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

    scrollToTop = () => {
        window.scrollTo(0,0);
    }

    render() {
        let gifs = this.props.trendingGifs

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
        
        return(
            <React.Fragment>
                <section className="main-view">
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
                        className="gif-container__button"
                    >
                    Back to top
                    </Button>          
                </section>
            </React.Fragment>
        ) 
    }
}

export default MainView