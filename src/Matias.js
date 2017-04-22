
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Playlists from './playlists';
import Youtube from 'react-youtube';
import FileReaderInput from 'react-file-reader-input';

export default class Content extends Component {
  render() {
    return (
      <div>
        <div id="skipframehidden">
          <div id="skipbutton" onClick={togglePlaylist.bind("skip")}>
            <h2>Skip song</h2>
          </div>
        </div>
        <div className="row">
          <div className="checkboxcontainer" id="dubstep" onClick={togglePlaylist.bind("dubstep")} name="playlists" id="dubstep" value="Dubstep" >
            <input type="checkbox" onClick={togglePlaylist.bind("dubstep")} name="playlists" id="dubstepinput" value="Dubstep" /><br />
          </div>
          <div className="checkboxcontainer" id="dnb" onClick={togglePlaylist.bind("dnb")} name="playlists" value="Dnb" >
            <input type="checkbox" onClick={togglePlaylist.bind("dnb")} name="playlists" id="dnbinput" value="Dnb" /> <br />
          </div>
          <div className="checkboxcontainer" id="futurebass" onClick={togglePlaylist.bind("futurebass")} name="playlists" value="Futurebass" >
            <input type="checkbox" onClick={togglePlaylist.bind("futurebass")} name="playlists" id="futurebassinput" value="Futurebass" /> <br />
          </div>
          <div className="checkboxcontainer" id="drumstep" onClick={togglePlaylist.bind("drumstep")} name="playlists" value="Drumstep">
            <input type="checkbox" onClick={togglePlaylist.bind("drumstep")} name="playlists" id="drumstepinput" value="Drumstep" /> <br />
          </div>
        </div>
        <div className="row">
          <div className="checkboxcontainer" id="harddance" onClick={togglePlaylist.bind("harddance")} name="playlists" value="Harddance" >
            <input type="checkbox" onClick={togglePlaylist.bind("harddance")} name="playlists" id="harddanceinput" value="Harddance" /> <br />
          </div>
          <div className="checkboxcontainer" id="trap" onClick={togglePlaylist.bind("trap")} name="playlists" value="Trap" >
            <input type="checkbox" onClick={togglePlaylist.bind("trap")} name="playlists" id="trapinput" value="Trap" /> <br />
          </div>
          <div className="checkboxcontainer" id="electronic" onClick={togglePlaylist.bind("electronic")} name="playlists" value="Electronic" >
            <input type="checkbox" onClick={togglePlaylist.bind("electronic")} name="playlists" id="electronicinput" value="Electronic" /> <br />
          </div>
          <div className="checkboxcontainer" id="indie" onClick={togglePlaylist.bind("indie")} name="playlists" value="Indie" >
            <input type="checkbox" onClick={togglePlaylist.bind("indie")} name="playlists" id="indieinput" value="Indie" /> <br />
          </div>
        </div>
        <div className="row">
          <div className="checkboxcontainer" id="house" onClick={togglePlaylist.bind("house")} name="playlists" value="House" >
            <input type="checkbox" onClick={togglePlaylist.bind("house")} name="playlists" id="houseinput" value="House" /> <br />
          </div>
          <div className="checkboxcontainer" id="electro" onClick={togglePlaylist.bind("electro")} name="playlists" value="Electro" >
            <input type="checkbox" onClick={togglePlaylist.bind("electro")} name="playlists" id="electroinput" value="Electro" /> <br />
          </div>
        </div>
        
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
  if(document.getElementById('skipframehidden')) {
    document.getElementById('skipframehidden').id = 'skipframe';
  }

  if (document.getElementById('youtubeContainer')) {
    document.getElementById('youtubeContainer').id = 'youtubeContainerOpen';
  }

if(this != 'skip') {
  var inputid = this + 'input';
  var inputbox = document.getElementById(inputid);
  if (inputbox.checked == true) {
    inputbox.checked = false;
    document.getElementById(this).className = 'checkboxcontainer';
  } else {
    inputbox.checked = true;
    document.getElementById(this).className = 'checkboxcontainerclicked';
  }
}

  var checkboxes = document.getElementsByName('playlists');
  var checked = [];
  var total = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var listname = checkboxes[i].value;
      var call = eval('Playlists.get' + listname + '()');
      call.forEach(function (song) {
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
    document.getElementById('youtubeContainerOpen')
  );
}

function randomizeSong(pl, total) {
  var randint = Math.floor((Math.random() * total) + 1);
  var current = pl[randint];
  return current;
}

