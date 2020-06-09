import React from 'react';
import Flashcard from './Flashcard';
import { Table, TableHeaderCell } from 'semantic-ui-react';

const Flashcards = ({ flashcards, remove, show, study}) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <TableHeaderCell>Question</TableHeaderCell>
        <TableHeaderCell>Answer</TableHeaderCell>
        <TableHeaderCell>Options</TableHeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        flashcards.map( card => (
          <Flashcard show={show} study={study} remove={remove} key={card.id} {...card} />
        ))
      }
    </Table.Body>
  </Table>
);

export default Flashcards;