import Component from 'preact';
import { Entity } from 'aframe-react';

export default class TeleportationElement extends Component {

  render() {
    const { destination, handleClick, ...rest} = this.props
    return <Entity id="teleport-box" primitive="a-box" {...this.props} events={{ click: () => handleClick(destination) }}></Entity>
  }

}
