import React, {Component} from 'react';
import PlaylistComponents from './PlaylistComponents'
import Filter from './Filter';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        if (this.state.isToggleOn === true){
            document.getElementById('widgetMusic').play();
        } else {
            document.getElementById('widgetMusic').pause();
        }
    }
    render() {
        let musicInfo = this.props.songs.map(file => {
            return (
                <PlaylistComponents key={file.id}
                                    id={file.id}
                                    author={file.author}
                                    title={file.title}
                                    mp3={file.mp3}
                                    poster={file.poster}
                />)
        });
        return (
            <div>
                <div id={'widgetInfo'} style={{display: 'none'}}>
                    <h2 style={{margin: 20}}>Now playing</h2>
                    <div id={'widget'} style={{display: 'none', background: '#dedcdc'}}>
                        <img src={musicInfo.poster} alt={'Album cover'}/>
                        <p>{musicInfo.author}</p>
                        <p>{musicInfo.title}</p>
                        <audio id={'widgetMusic'} hidden type="audio/mpeg"></audio>
                        <div id={'controller'} style={{display: 'flex', justifyContent: 'space-around'}}>
                            <button className={'material-icons'}
                                    style={{height: '50px', width: '50px', lineHeight: '50px', textAlign: 'center',
                                        borderRadius: '50%', marginTop: 240, background: '#fff', border: 'none'}}>
                                skip_previous
                            </button>
                            <button className={'material-icons'} onClick={this.handleClick}
                                    style={{height: '70px', width: '70px', lineHeight: '70px', textAlign: 'center',
                                        borderRadius: '50%', marginTop: 227, background: '#fff', border: 'none'}}>
                                {this.state.isToggleOn ? 'play_arrow' : 'pause'}
                            </button>
                            <button className={'material-icons'}
                                    style={{height: '50px', width: '50px', lineHeight: '50px', textAlign: 'center',
                                        borderRadius: '50%', marginTop: 240, background: '#fff', border: 'none'}}>
                                skip_next
                            </button>
                        </div>
                    </div>
                </div>
                <Filter/>
                {musicInfo}
            </div>
        )
    }
}

export default Playlist