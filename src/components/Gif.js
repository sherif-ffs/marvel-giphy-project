import React from 'react';

import { motion } from "framer-motion";

import '../styles/Gif/gif.css'

class Gif extends React.Component {

    gifIsPaused = false

    // function to pause gifs because epilepsy
    pauseGif(e) {
        if (this.gifIsPaused === true) {
            e.target.src = this.props.activeUrl;
            this.gifIsPaused = false;
        } else {
            e.target.src = this.props.stillUrl;
            this.gifIsPaused = true
        }
    };

    render() {
        console.log('this.props; ', this.props)
        return (
            <div 
                className="gif-wrapper"
                >
                <motion.div 
                    className="gif-img-wrapper"
                    whileHover={{ scale: .99, rotate: 1 }}
                    whileTap={{
                        scale: 0.95,
                        rotate: -2,
                    }}
                    style={
                        {
                            background: `${this.props.activeUrl ? this.props.activeUrl : '#f5f5f5'}`
                        }
                    }
                >
                    <img 
                        src={this.props.activeUrl} 
                        alt="gif" 
                        className="gif-wrapper__image"
                        onClick={e => this.pauseGif(e)}
                        ></img>
                </motion.div>
                <h1 className="gif-wrapper__title">{this.props.title}</h1>
            </div>

        )
    }
}

export default Gif

