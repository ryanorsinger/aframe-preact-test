import Component from 'preact';
import { Entity } from 'aframe-react';

export default class ExhibitionBox extends Component {

  render() {
    return <Entity id="e-box" primitive="a-box" {...this.props} sound="on: click; src: #click-sound"></Entity>
  }

}
