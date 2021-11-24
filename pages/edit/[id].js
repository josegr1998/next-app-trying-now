import React from "react";
import axios from "axios";

const Note = ({ note }) => {
  console.log(note);
  const singleNote = note.data;
  return (
    <div>
      <h1>{singleNote.title}</h1>
      <p>{singleNote.description}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  //for every get request i must use this one
  const response = await axios.get(
    `${dev ? DEV_URL : PROD_URL}/api/notes/${id}`
  );

  const data = response.data;

  console.log(data);

  return {
    props: {
      note: data,
    },
  };
};

export default Note;
