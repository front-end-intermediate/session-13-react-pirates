# Notes

Review current route.

Add a link from detail to home.

```js
import { Link } from 'react-router-dom';
```

```html
<Link to='/'>Home</Link>
```

Add links to pirate names in the Pirate component.

```js
import { Link } from 'react-router-dom';
```

```html
<li><Link to={`/pirate/${this.props.index}`}>{details.name}</Link></li>
```

Examine the props available to Detail.

```html
<p>{props.match.path}</p>
<p>{props.location.pathname}</p>
<p>{props.match.params.pid}</p>
```

Store the param we want in a variable.

```js
const pirateId = props.match.params.pid;
```

Make the Pirates state available in Details.

```js
import base from '../base';
```

To do this we must have a true component.

```js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
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

    return (
      <div className="pirate-detail">
      <h1>Pirate Detail</h1>
      <p>{this.props.match.path}</p>
      <p>{this.props.location.pathname}</p>
      <p>{this.props.match.params.pid}</p>

      <Link to='/'>Home</Link>
      </div>
    );
  };
}

export default PirateDetail;
```

Adding the state is complicated due to the fact that thie Detail component is not a child of the App component.

Add the life cycle hooks from App:

```js
  componentWillMount(){
    this.ref = base.syncState(`tom-jones-pirates/pirates`, {
      context: this,
      state: 'pirates'
    })
  }

  componentWillUmount(){
    base.removeBinding(this.ref)
  }
```

Use the parameter to extract the pirate instance:

```js
const pirateId = this.props.match.params.pid;
const myPirate = this.state.pirates[pirateId]
console.log(myPirate)
```

In a protected if statement, begin extracting the needed properties.

```js
if (myPirate){
  this.pirateName = myPirate.name;
  console.log(this.pirateName)
}
```

Use the return to display it.

```js
return (
  <div className="pirate-detail">
  <h1>Pirate Detail</h1>
  <h2>{this.pirateName}</h2>

  <Link to='/'>Home</Link>
  </div>
)
```

Build out the needed properties:

```js
if (myPirate){
  this.pirateName = myPirate.name;
  this.pirateWeapon = myPirate.weapon;
  this.pirateVessel = myPirate.vessel;
  this.pirateYear = myPirate.year;
  this.pirateDescription = myPirate.desc;
  this.pirateAvatar = myPirate.image;
}
```

And display them:

```js
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
```

Note, the avatar is the same for all pirates:

```js
import Avatar from '../assets/img/drunkenPirate_avatar.png';
```

Sign in and try editing a pirate. We have a problem with the state in an unmounted comonent (PirateDetail)