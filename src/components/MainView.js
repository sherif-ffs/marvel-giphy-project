import React from 'react';

class MainView extends React.Component {

    render() {
        let gifs = this.props.trendingGifs

        if (typeof gifs !== 'undefined') {
            gifs.forEach(gif => {
                console.log('gif.title: ', gif.title)
            })
        }

        return(
            <div className="gif-container">gifs will go here</div>
        ) 
    }
}

export default MainView