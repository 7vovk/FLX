import React, { Component } from 'react';
import Playlist from './Playlist'

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        };
    }

    componentDidMount() {
        fetch('https://fl-homework-api.firebaseio.com/mozart.json')
            .then(
                (response) => {
                    if (response.status !== 200) {
                        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                        return;
                    }

                    response.json().then((data) => {
                        this.setState({
                            songs: data,
                        });
                    });
                },
            )
            .catch(function (err) {
                console.log(`Fetch Error: ${err}`);
            });
    }

    render() {
        if (this.state.songs.length === 0) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <Playlist songs={this.state.songs}/>
            </div>
        );
    }
}

export default Music