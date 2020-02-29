import React from 'react';

import '../styles/Gif/gif.css'

class Gif extends React.Component {
    render() {
        return (
            <div className="gif-wrapper">
                <img src={this.props.url} alt="gif" className="gif-wrapper__image"></img>
                <h1 className="gif-wrapper__title">{this.props.title}</h1>
            </div>
        )
    }
}

export default Gif