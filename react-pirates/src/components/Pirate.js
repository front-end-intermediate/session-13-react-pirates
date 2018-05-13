import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pirate.css';

class Pirate extends React.Component {
  render() {
    const {details} = this.props;
    return (
      <div className='pirate'>
      <ul>
      <li><Link to={`/pirate/${this.props.index}`}>{details.name}</Link></li>
      <li>{details.weapon}</li>
      <li>{details.vessel}</li>
      <li><button onClick={() => this.props.removePirate(this.props.index)}>X</button></li>    
      </ul>
      </div>
    )
  }
}

export default Pirate;