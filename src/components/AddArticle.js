import React, {Component} from 'react';
import { connect } from "react-redux";
import ArticleForm from "../forms/ArticleForm";
import {addArticle} from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
};

class AddArticle extends Component {
  submit = data => {
    this.props.addArticle(data);
  };

  render() {
    return (
      <div>
        <h3>Add an Article</h3>
        <ArticleForm submit={this.submit}/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddArticle);
