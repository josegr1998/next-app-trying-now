import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";

const CreateNote = () => {
  const [formValue, setFormValue] = useState({ title: "", description: "" });

  const handleChange = (value, name) => {
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("entering hte post request");
      const newPost = await axios.post("/api", formValue);
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='put a title'
          value={formValue.title}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
          name='title'
        />
        <input
          placeholder='put a description'
          value={formValue.description}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
          name='description'
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default CreateNote;
