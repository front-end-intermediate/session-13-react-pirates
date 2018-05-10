import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import Avatar from '../assets/img/drunkenPirate_avatar.png';
import base from '../base';

class PirateDetail extends React.Component {
  
  constructor(){
    super();
    this.state = {
      pirates: {}
    }
  }
  
  render(){
    
    const pirateId = this.props.match.params.pid;

    const myPirate = this.state.pirates[pirateId]

    if (myPirate){
      this.pirateName = myPirate.name;
      this.pirateWeapon = myPirate.weapon;
      this.pirateVessel = myPirate.vessel;
      this.pirateYear = myPirate.year;
      this.pirateDescription = myPirate.desc;
      this.pirateAvatar = myPirate.image;
    }
    
    return (
      <div className="pirate-detail">
      <h1>Pirate Detail</h1>
      <h2>{this.pirateName}</h2>
      <img src={Avatar} alt="Pirate avatar" />
      <ul>
        <li>Year: {this.pirateYear}</li>
        <li>Weapon: {this.pirateWeapon} </li>
        <li>Vessel: {this.pirateVessel}</li>
      </ul>
      <p>{this.pirateDescription}</p>
      
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