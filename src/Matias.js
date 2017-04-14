import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Playlists from './playlists';
import Youtube from 'react-youtube';
import FileReaderInput from 'react-file-reader-input';

export default class Content extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" onClick={togglePlaylist.bind("dubstep")} name="playlists" id="dubstep" value="Dubstep"/>Dubstep <br />
        <input type="checkbox" onClick={togglePlaylist.bind("dnb")} name="playlists" id="dnb" value="Dnb"/>DnB <br />
        <input type="checkbox" onClick={togglePlaylist.bind("futurebass")} name="playlists" id="futurebass" value="Futurebass"/>Future bass <br />
        <input type="checkbox" onClick={togglePlaylist.bind("drumstep")} name="playlists" id="drumstep" value="Drumstep"/>DrumStep <br />
        <input type="checkbox" onClick={togglePlaylist.bind("harddance")} name="playlists" id="harddance" value="Harddance"/>Hard Dance <br />
        <input type="checkbox" onClick={togglePlaylist.bind("trap")} name="playlists" id="trap" value="Trap"/>Trap <br />
        <input type="checkbox" onClick={togglePlaylist.bind("electronic")} name="playlists" id="electronic" value="Electronic"/>Electronic <br />
        <input type="checkbox" onClick={togglePlaylist.bind("indie")} name="playlists" id="indie" value="Indie"/>Indie <br />
        <input type="checkbox" onClick={togglePlaylist.bind("house")} name="playlists" id="house" value="House"/>House <br />
        <input type="checkbox" onClick={togglePlaylist.bind("electro")} name="playlists" id="electro" value="Electro"/>Electro <br />
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
  // Yllä oleva koodi toimisi, jos pistäisimme tämän hostingiin, ja tekisimme pari muutosta. jätän sen vain tänne, jotta on todiste siitä, että tätä ratkaisua kokeiltiin.
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

