import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProgressSoundPlayer from './components/ProgressSoundPlayer';
import SoundCloud from 'node-soundcloud';
import Loading from 'react-loading';

var clientId = process.env.CLOUD_CLIENTID;


SoundCloud.init({
  id: clientId
});

class Main extends Component {
  constructor(props) {
    super();
  }
}
