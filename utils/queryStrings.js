import { gql } from "graphql-request";

export const getNote = gql`
  query getNote($id: ID!) {
    findNoteByID(id: $id) {
      _id
      title
      body
    }
  }
`;

export const insertQuery = gql`
  mutation insertNote($title: String!, $body: String!) {
    createNote(data: { title: $title, body: $body }) {
      _id
    }
  }
`;

export const getAllNotes = gql`
  query {
    allNotes {
      data {
        _id
        title
      }
    }
  }
`;
export const deleteQuery = gql`
  mutation delete($id: ID!) {
    deleteNote(id: $id) {
      _id
    }
  }
`;
export const updateQuery = gql`
  mutation changeNote($id: ID!, $title: String!, $body: String!) {
    updateNote(id: $id, data: { title: $title, body: $body }) {
      _id
    }
  }
`;
