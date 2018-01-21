import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';

class Register extends Component {
  state = {
    data: {
      name: "",
      age: ""
    }
  };

  onChange = (e) => {
    this.setState({
      data: {...this.state.data, [e.target.name]: [e.target.value] }
    });
  };

  submit = () => {
    this.props.setName(this.state.data.name);
    this.props.setAge(this.state.data.age);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.data.name}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            value={this.state.data.age}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button default>Set</Button>
      </Form>
    );
  }
};

export default Register;
