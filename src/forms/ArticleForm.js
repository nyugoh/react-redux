import React, {Component} from 'react';
import { Form, Button, TextArea } from "semantic-ui-react";
import uuid from "uuidv4";

class ArticleForm extends Component {
  state = {
    data: {
      title: "",
      body: "",
      id: ""
    },
    loading: false,
    errors: {}
  };

  onChange = (e) => {
    const id = uuid();
    this.setState({ data: {...this.state.data, [e.target.name]:e.target.value, id:id } });
  };

  submit = () => {
    const errors = this.validate(this.state.data);
    this.setState({errors: errors});
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true});
      this.props.submit({...this.state.data}); // Send the data to redux connected component i.e the parent
      this.setState({
        data: {
          title: "",
          id: "",
          body: ""
        },
        errors: {},
        loading: false
      });
    }

  };

  validate = (data) => {
    const errors = {};
    if(!data.title) errors.title = "Give me a title";
    if(!data.body) errors.body = "Give me a body";
    return errors;
  };

  render() {
    return (
      <Form onSubmit={this.submit} loading={this.state.loading}>
        <Form.Field error={!!this.state.errors.title} required>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.data.title}
            onChange={this.onChange.bind(this)}
            placeholder="Enter the title"
          />
        </Form.Field>

        <Form.Field error={!!this.state.errors.body} required>
          <label htmlFor="body">Content</label>
          <TextArea
            value={this.state.data.body}
            onChange={this.onChange.bind(this)}
            name="body"
            id="body"
            autoHeight
            placeholder='Content body'
            style={{ minHeight: 100 }}
          />
        </Form.Field>
        <Button primary> ADD</Button>
      </Form>
    );
  }
};

export default ArticleForm;
