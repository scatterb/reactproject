import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Playlists from './playlists';
import Youtube from 'react-youtube';

export default class Content extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" onClick={togglePlaylist.bind("dubstep")} name="playlists" id="dubstep" value="Dubstep"/>Dubstep <br />
        <input type="checkbox" onClick={togglePlaylist.bind("dnb")} name="playlists" id="dnb" value="Dnb"/>DnB <br />
        <input type="checkbox" onClick={togglePlaylist.bind("futurebass")} name="playlists" id="futurebass" value="Futurebass"/>Future bass <br />
      </div>   
    );
  }
}


function togglePlaylist() {
  /*var filepath = "playlists/dubstep.txt";
  var file = new XMLHttpRequest();
  file.open("GET", filepath, true);
  file.onreadystatechange = function () {
    if (file.readyState === 4) {
      if (file.status === 200 || file.status == 0) {
        var allText = file.responseText;
        document.getElementById('content').innerHTML = allText;
        alert(allText);
      }
    }
  }
  file.send(null);*/
  // Tämä koodi toimisi, jos käytettäisiin esim pelkkää jquerya tai ihan vain vanilla javascriptiä, mutta reactin reititysprotokollat tuhoavat tämän toimivuuden.
  //  Tästä syystä joudun tekemään tämän hieman eri lähestymistavalla.
  
  var checkboxes = document.getElementsByName('playlists');
  var checked = [];
  var total = 0;

  for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      var listname = checkboxes[i].value;
      var call = eval('Playlists.get' + listname + '()');
      call.forEach(function(song) {
        checked.push(song);
      });
      total = total + call.length;
    }
  }

  var playlist = checked;
  var current = randomizeSong(playlist, total);

  const opts = {
    playerVars: {
      autoplay: 1
    }
  };

  ReactDOM.render(
    <Youtube 
    videoId={current}
    onEnd={togglePlaylist}
    opts={opts}
    />,
    document.getElementById('content2')
  );
}

function randomizeSong(pl, total) {
  var randint = Math.floor((Math.random() * total) + 1);
  var current = pl[randint];
  return current;
}