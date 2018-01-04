import Component from 'preact';
import { Entity } from 'aframe-react';

export default class Camera extends Component {

  render() {
    return (
      <Entity primitive="a-camera">
        <Entity
          primitive="a-cursor"
          geometry={{ primitive: 'ring' }}
          material={{ color: 'white', shader: 'flat' }}/>
      </Entity>
    );
  }
}
