import React, { Component } from 'react';
import YouTube from './YouTube';

export default class Content extends Component {
  render() {
    /*const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="cG7cRDcPY3k"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
  */
    return (
      <div>
        <iframe src="https://www.youtube.com/playlist?list=PL9BCA60EEB1C8893D"></iframe>
      </div>   
    );
  }
}

const dnbPlaylist = 'https://www.youtube.com/watch?v=cG7cRDcPY3k&list=RDQMiuO43eLdcfI';
const drumAndBass = getLinks(dnbPlaylist);

function getLinks(pl) {
    
}
