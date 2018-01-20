import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Icon } from "semantic-ui-react";

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ArticleList extends Component {
  delete = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <List ordered={true}>
        {this.props.articles.map( article => (
          <List.Item key={article.id}>
            {article.title} : {article.body} <Icon onClick={this.delete} style={ {float:'right'}} name="trash outline" size="large" color="red" link={true}/>
          </List.Item>
        ))}
      </List>
    );
  };
}

export default connect(mapStateToProps)(ArticleList);
