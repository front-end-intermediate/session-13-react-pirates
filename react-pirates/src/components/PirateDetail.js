import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import base from '../base';
import Avatar from '../assets/img/drunkenPirate_avatar.png';

class PirateDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      pirates: {}
    }
  }

  

  render() { 
    const pirateId = this.props.match.params.pid;
    const myPirate = this.state.pirates[pirateId];

    if (myPirate) {
    this.pirateName = myPirate.name;
    this.pirateWeapon = myPirate.weapon;
    this.pirateVessel = myPirate.vessel;
    this.pirateDescription = myPirate.desc;
    this.pirateAvatar = myPirate.image;
    } 

    return (
      <div className="pirate-detail">
        <h1>Pirate Detail</h1>
        <img src={Avatar} alt="" />
      <p>{this.pirateName}</p>
        <ul>
          <li>{this.pirateWeapon}</li>
          <li>{this.pirateVessel}</li>
        </ul>  
      <p>{this.pirateDescription}</p>
      {/* <p>{this.props.match.params.pid}</p> */}
      <Link to='/'>Home</Link>
      </div>
    )
  }

  componentWillMount(){
    this.ref = base.syncState(`tom-jones-pirates/pirates`, {
      context: this,
      state: 'pirates'
    })
  }

  componentWillUmount(){
    base.removeBinding(this.ref)
  }  
  
}

export default PirateDetail;