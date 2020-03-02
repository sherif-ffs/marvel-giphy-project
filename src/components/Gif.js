import React from 'react';

import { motion } from "framer-motion";

import styled from 'styled-components';
import '../styles/Gif/gif.css'

class Gif extends React.Component {

    render() {
        console.log('this.props; ', this.props)
        return (
            <div 
                className="gif-wrapper"
                >
                <motion.div 
                    className="gif-img-wrapper"
                    whileHover={{ scale: 1, rotate: 2 }}
                    whileTap={{
                        scale: 0.9,
                        rotate: -3,
                    }}
                    style={
                        {
                            background: `${this.props.activeUrl ? this.props.activeUrl : '#f5f5f5'}`
                        }
                    }
                >
                    <img src={this.props.activeUrl} alt="gif" className="gif-wrapper__image"></img>
                </motion.div>
                <h1 className="gif-wrapper__title">{this.props.title}</h1>
            </div>

        )
    }
}

export default Gif

