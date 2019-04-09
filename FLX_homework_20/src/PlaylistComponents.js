import React from 'react';
import ToggleLike from './ToggleLike';

class PlaylistComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        if (this.state.isToggleOn === true) {
            document.getElementById('widget').style.display = "block";
            document.getElementById('widget').style.position = "absolute";
            document.getElementById('widget').style.width = "300px";
            document.getElementById('widget').style.height = "350px";
            document.getElementById('widget').style.border = "1px solid black";
            document.getElementById('widget').style.borderRadius = "20px";
            document.getElementById('playlist').style.display = "inline-block";
            document.getElementById('playlist').style.marginLeft = "350px";
            document.getElementById('widgetInfo').style.display = "inline-block";
            document.getElementById('widgetInfo').style.position = "absolute";
            let audios = document.getElementsByTagName('audio');
                for (let i = 1, len = audios.length; i < len; i++) {
                    let song = 'song' + [i];
                    document.getElementById(song).style.marginLeft = "350px";
                    document.getElementById(song).style.display = "block";
                }


        }
    }

    render() {
        let testAudio = 'testAudio' + this.props.id;
        let song = 'song' + this.props.id;
        document.addEventListener('play', function (e) {
            let audios = document.getElementsByTagName('audio');
            for (let i = 0, len = audios.length; i < len; i++) {
                if (audios[i] !== e.target) {
                    audios[i].pause();
                    audios[i].currentTime = 0;
                }
            }
        }, true);
        return (
            <div>

                <div id={song}>
                    <div style={{
                        backgroundColor: '#dedcdc',
                        borderRadius: 25,
                        margin: 10,
                        padding: '5px 10px 10px',
                        height: 45
                    }}>
                        <div style={{display: 'inline'}} onClick={function () {
                            let audio = document.getElementById(testAudio);
                            if (audio.paused) {
                                audio.play();
                                document.getElementById('widgetMusic').src = document.getElementById(testAudio).src;
                            } else {
                                audio.pause();
                                audio.currentTime = 0;
                            }
                        }
                        }>
                            <button style={{
                                height: 50,
                                width: 50,
                                verticalAlign: 'top',
                                border: 'none',
                                background: 'transparent'
                            }} onClick={this.handleClick}
                                    className={'material-icons'}>
                                {this.state.isToggleOn ? 'play_arrow' : 'pause'}
                            </button>
                        </div>
                        <div style={{display: 'inline-block', margin: '5px 20px'}}>
                            <p style={{margin: 0}}>{this.props.author}</p>
                            <p style={{margin: 0}}>{this.props.title}</p>
                        </div>

                        <audio id={testAudio} hidden src={this.props.mp3} type="audio/mpeg"></audio>
                        <ToggleLike/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistComponents