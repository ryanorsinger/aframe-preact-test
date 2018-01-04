import AFRAME from 'aframe';
import 'aframe-animation-component';
import {Entity, Scene} from 'aframe-react';
import { Component, render } from 'preact';
import drawComponent from 'aframe-draw-component';
AFRAME.registerComponent("draw", drawComponent.component);

import 'aframe-htmltexture-component';

import ExhibitionBox from './components/ExhibitionBox';
import Camera from './components/Camera';
import TeleportationElement from './components/TeleportationElement';
import Environment from './components/Environment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red', currentRoom: "navRoom"};
  }
  //malwine: yeah, I need it all ;) so how did the closing of the class help?
  //malwine: like this now should be old js function?
  // malwine: look here is some working example: https://glitch.com/edit/#!/salty-cat?path=app/main.js:18:17
  //malwine: we can try that :)
  // ryan: "render is not defined" on the bottom of the script.. may be a scope issue, looking at other working examples to double check
  //malwine: ok syntax fixed but still I don't see anything live... oh well... :'(
  // malwine: was not using render from preact
  // malwine: but still that didnt work, hm... 
  // ryan: yay for no syntax errors, but darn if errors don't help show the path.
  // ryan: while we're seeing a blank screen, it looks like the element height is 0px. I tried increasing it it but still saw blank white screen.
  // malwine: when I run this locally I can see everthing :thinking_face:
  // ryan: yep, the salty-cat project renders and looks good
  // ryan: looking more at the source for your other project. 
  //malwine: and you saw the other example, right? there it works... I guess I setup in this new project here is weird...
  //malwine: maybe a bit of background: I used react first and then it was too big for glitch so I tryied to use preact
  //malwine: I think the attachment of the components doesnt work, we get the div <div id="sceneContainer" style="height: 100%; width: 100%"></div>
  //malwine: but we dont get anything else
  
  handleClick(destination) {
    return setTimeout(
      () => this.setState({currentRoom: destination }), 1000
    );
  }

  render () {
    
    //"rooms" is a way to group components, pure js
  let rooms = {
    navRoom: [
      <ExhibitionBox src={ "#ada" } position={ "-1.5 3 -4"} sound="on: click; src: #click-sound"/>,
      <TeleportationElement
        material={{ color: "white"}}
        position={"1.5 2 -4"}
        scale={"0.5 4 0.5"}
        handleClick={ this.handleClick}
        destination="firstRoom"/>],
    firstRoom: [
      <ExhibitionBox src={ "#ada" } position={ "-2 3 -4"} />,
      <ExhibitionBox src={ "#ada" } position={ "0.5 2 -4.3"} />,
      <ExhibitionBox src={ "#ada" } position={ "3 2.3 -4.3"} />,
      <TeleportationElement
        material={{ color: "#01ff26"}}
        position={ "-3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="navRoom"/>,
      <TeleportationElement
        material={{ color: "#d800f0"}}
        position={ "3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="secondRoom"/>
    ],
    secondRoom: [
      <ExhibitionBox src={ "#grace" } position={ "-2 2.2 -4"} />,
      <ExhibitionBox src={ "#grace" } position={ "0.5 3 -4.3"} />,
      <ExhibitionBox src={ "#grace" } position={ "3 2 -4.3"} />,
      <TeleportationElement
        material={{ color: "#01ff26"}}
        position={ "-3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="navRoom"/>,
      <TeleportationElement
        material={{ color: "#d800f0"}}
        position={ "3 0.5 -3"}
        scale={"0.5 0.5 1"}
        handleClick={ this.handleClick}
        destination="firstRoom"/>
    ]
  }

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://ucarecdn.com/b2ac6e1e-b44b-48ab-adfc-a3d595e07d1b/"/>
          <img id="skyTexture" src="https://ucarecdn.com/23d47526-e465-49a9-8477-91b8036f42e3/"/>
          <img id="ada" src="https://ucarecdn.com/b021b66f-ef4f-46c2-bfa6-233f1deee719/"/>
          <img id="grace" src="https://ucarecdn.com/b60483ac-60bb-4e55-8429-328695dfffde/"/>
          <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
        </a-assets>

        { this.rooms[this.state.currentRoom] }

        <Environment />
        <Camera />
      </Scene>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  render(<App/>, document.querySelector('#sceneContainer'));
})
