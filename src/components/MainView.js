import React from 'react';

import Gif from './Gif'
import Button from '@material-ui/core/Button';

import '../styles/MainView/mainView.css'
class MainView extends React.Component {

    render() {
        console.log('this.props: ', this.props)
        let gifs = this.props.trendingGifs

        let trendingGifs;
        
        if (typeof gifs !== 'undefined') {
            console.log('gifs: ', gifs)
            trendingGifs = gifs.map(gif => {
                return(
                    <Gif 
                        className="gif-container"
                        title={gif.title}
                        url={gif.images.downsized_medium.url}
                    >
                    </Gif>
                )
            })
        }

        return(
            <React.Fragment>
                <section className="main-view">
                    <div className="gif-container">
                        {trendingGifs}
                    </div>
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

export default MainView