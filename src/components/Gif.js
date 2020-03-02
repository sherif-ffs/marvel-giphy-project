import React from 'react';

import styled from 'styled-components';
import '../styles/Gif/gif.css'

// const GifWrapper = styled.div`
//     background: ${props => props.url.complete ? props.url : 'red'};
//     height: 70%!important;
//     width: 100%;
//     border-radius: 5px;
//     box-shadow: 0px 1px 10px rgba(34, 34, 34,.3);
// `

class Gif extends React.Component {
    render() {
        console.log('this.props: ', this.props)
        return (
            <div className="gif-wrapper">
                <div 
                className="gif-img-wrapper"
                style={
                    {
                        background: `${this.props.url.complete ? this.props.url : '#f5f5f5'}`
                    }
                }
                >
                    <img src={this.props.url} alt="gif" className="gif-wrapper__image"></img>
                </div>
                <h1 className="gif-wrapper__title">{this.props.title}</h1>
            </div>
        )
    }
}

export default Gif