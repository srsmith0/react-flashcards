import React from "react";
import { Table, Button } from "semantic-ui-react";

const Flashcard = ({ question, answer, showAnswer, focus, id, remove, show, study }) => (
  <Table.Row>
    <Table.Cell style={ focus ? {color: "red", fontSize: "1.25em", fontWeight: "bold" } : null }>{question}</Table.Cell>
    <Table.Cell>{showAnswer ? answer : "Press Show Answer to Reveal" }</Table.Cell>
    <Table.Cell>
      <Button onClick={() => show(id)} color="teal">Show Answer</Button>
      <Button onClick={() => remove(id)} color="pink">Delete</Button>
      <Button onClick={() => study(id)} color="dark red">Got Wrong</Button>
    </Table.Cell>
  </Table.Row>
)

export default Flashcard;