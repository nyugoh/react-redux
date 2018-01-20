import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";
import List from "./components/List";
import AddArticle from "./components/AddArticle";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h2>React Redux Tutorial :-)</h2>
        <hr/>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <h4>List of Articles</h4>
              <List/>
            </Grid.Column>
            <Grid.Column>
              <AddArticle/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
