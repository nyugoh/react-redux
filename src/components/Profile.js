import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <p>Name {this.props.user.name}</p>
        <p>Age {this.props.user.age}</p>
      </div>
    );
  }
}

export default Profile;
