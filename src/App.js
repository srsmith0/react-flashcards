import React from 'react';
import './App.css';
import { Container, Header } from 'semantic-ui-react';
import Flashcards from './Flashcards';
import FlashForm from './FlashForm';

class App extends React.Component {
  state = {
    flashcards: [
      {id:1, question:"What is an arrow function?", answer: "func = () => {}", showAnswer: false, focus: false},
      {id:2, question:"What is semantic ui?", answer: "A component library for styling", showAnswer: false, focus: false},
      {id:3, question:"What language does React utilize?", answer: "JavaScript", showAnswer: false, focus: false},
    ],
  }

  addCard = (card) => {
    let newCard = {id: `${Math.random()}`, ...card};
    this.setState({ flashcards: [...this.state.flashcards, newCard] });
  }

  deleteCard = (id) => {
    const flashcards = this.state.flashcards.filter( (card) => card.id !== id)
    this.setState({ flashcards })
  }

  toggleAnswer = (id) => {
    const { flashcards } = this.state;
    this.setState ({
      flashcards: flashcards.map ( c => {
        if (c.id === id) {
          return {...c, showAnswer: !c.showAnswer}
        }
        return c
      })
    })
  }

  studyMore = (id) => {
    const { flashcards } = this.state;
    this.setState ({
      flashcards: flashcards.map ( c => {
        if (c.id === id) {
          return {...c, focus: !c.focus}
        }
        return c
      })
    })
  }
  render() {
    return (
      <Container style={{ paddingTop: "30px" }}>
        <Header as="h1">Flashcards</Header>
        <Flashcards show={this.toggleAnswer} study={this.studyMore} remove={this.deleteCard} flashcards={this.state.flashcards} />
        <FlashForm add={this.addCard} />
       </Container>
    )
  }
}

export default App;
