import graphqlClient from "./graphqlClient";
import {
  insertQuery,
  updateQuery,
  deleteQuery,
  getAllNotes,
  getNote,
} from "./queryStrings";

export const addNote = async (title, body) => {
  await graphqlClient.request(insertQuery, { title, body });
};

export const editNote = async (id, title, body) => {
  await graphqlClient.request(updateQuery, { id, title, body });
};
export const deleteNote = async (id) => {
  await graphqlClient.request(deleteQuery, { id });
};
export const getNotesList = async () => {
  const data = await graphqlClient.request(getAllNotes);
  return data;
};
export const getSingleNote = async (id) => {
  const data = await graphqlClient.request(getNote, { id });
  return data;
};
