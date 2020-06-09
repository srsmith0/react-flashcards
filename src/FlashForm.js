import React from 'react';
import { Form } from 'semantic-ui-react';

class FlashForm extends React.Component {
  state = { question: "", answer: "", showAnswer: false, focus: false}

handleSubmit= (e) => {
  e.preventDefault();
  console.log("clicked")
  this.props.add(this.state);
  this.setState({
    question: '',
    answer: '',
  })
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  })
}

render () {
  return ( 
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
        fluid
        label="Question"
        placeholder="Enter question"
        name="question"
        value={this.state.question}
        onChange={this.handleChange}
          />
        <Form.Input 
        fluid
        label="Answer"
        placeholder="Enter answer"
        name="answer"
        value={this.state.answer}
        onChange={this.handleChange}
          />
          <Form.Button size="massive" color="purple">Submit</Form.Button>
      </Form.Group>
    </Form>
  )
}

}

export default FlashForm;