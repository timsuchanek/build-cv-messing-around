import React, { useState } from "react";

const Form = ({ experience, updateExperiences, updateAll }) => {
  const [form, setForm] = useState({
    company: null,
    name: experience.name,
    description: experience.description,
  });

  const [isCompany, setIsCompany] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [message, setMessage] = useState("");

  function handleTextChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    updateAll(e, experience);
  }

  function inputChange(e) {
    const { name, checked } = e.target;
    console.log("{name, checked}:", name, checked);
    if (name === "isCompany") {
      return setIsCompany(checked);
    }
    setIsPersonal(checked);
  }

  function messageToShow(msg) {
    setMessage(msg);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isPersonal && !isCompany) {
      return messageToShow(
        "Company or personal needs to be toggled need to choose either "
      );
    }

    updateExperiences({ ...form, id: experience.id });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of project</label>
      <input value={form.name} name="name" onChange={handleTextChange} />
      <textarea
        name="description"
        value={form.description}
        onChange={handleTextChange}
      />
      <div>
        <label>Company?</label>
        <input
          type="checkbox"
          name="isCompany"
          value={isCompany}
          onChange={inputChange}
        />
      </div>
      <div>
        <label>Personal?</label>
        <input
          type="checkbox"
          name="isPersonal"
          value={isPersonal}
          onChange={inputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
