import React, { Component } from 'react';

export default class Filter extends React.Component {

    render() {
        return (
            <div id={'playlist'}>
                <h2 style={{margin: 20}}>Playlist</h2>
                <div>
                    <button style={{display: 'inline', marginLeft: 20, background: 'transparent', border: 'none'}}>
                        All
                    </button>
                    <button style={{display: 'inline', marginLeft: 20, background: 'transparent', border: 'none'}}>
                        Favourite
                    </button>
                </div>
            </div>
        );
    }
}