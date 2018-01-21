import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Grid } from 'semantic-ui-react';
import Profile from '../components/Profile';
import Register from '../components/Register';
import {SET_NAME, SET_AGE} from '../constants/action-types'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    friend: state.friend
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: name => dispatch({
      type: SET_NAME,
      payload: name
    }),
    setAge: age => dispatch({
      type: SET_AGE,
      payload: age
    })
  }
};


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h2>React-Redux app</h2>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <h4>User Profile</h4>
              <Profile user={this.props.user.data}/>
            </Grid.Column>
            <Grid.Column>
              <h4>User setting</h4>
              <Register setName={this.props.setName} setAge={this.props.setAge}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
