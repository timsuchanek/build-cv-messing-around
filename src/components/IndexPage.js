import React, { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import base from "axios";
import { prisma } from "../utils/prismaClient";
// import { startingForm } from "../utils/startingForm";
import { startingForm } from "../utils";
import Form from "../components/Form";

const axios = base.create({
  baseURL: "http://localhost:3000/api",
});

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/PdfView"),
  { ssr: false }
);

const App = styled.div`
  .pdf {
    display: flex;
    justify-content: space-between;
  }
  iframe {
    width: 50vw;
    height: 100vh;
  }
`;

const Index = (props) => {
  console.log("props:", props);

  const [experiences, setExperiences] = useState(props.experiences);
  console.log("experiences:", experiences);

  // function edit() {}

  function updateExperiences(newExperience) {
    console.log("newExperience:", newExperience);
    setExperiences(
      experiences.map((el) =>
        el.id === newExperience.id ? { ...newExperience } : { ...el }
      )
    );
  }

  async function handleSubmit(e) {
    //  e.preventDefault();
    //  try {
    //    const newForm = Object.entries(form).reduce((acc, val) => {
    //      if (!val[1]) {
    //        return acc;
    //      }
    //      return { ...acc, [val[0]]: val[1] };
    //    }, {});
    //    const { data } = await axios.post("create", newForm);
    //    console.log("data:", data);
    //  } catch (error) {
    //    console.log("error:", error);
    //  }
  }

  function addMoreExperience() {
    setExperiences([...experiences, startingForm]);
  }
  return (
    <App>
      <h1>Hello</h1>
      <div className="pdf">
        {experiences.map((el) => (
          <Form
            key={el.id}
            experience={el}
            updateExperiences={updateExperiences}
            updateAll={(e, xp) => {
              const { name, value } = e.target;
              setExperiences(
                experiences.map((x) =>
                  x.id === xp.id ? { ...xp, [name]: value } : x
                )
              );
            }}
          />
        ))}
        <button onClick={addMoreExperience}>Add New Experience</button>
        <DynamicComponentWithNoSSR experiences={experiences} />
      </div>
    </App>
  );
};

export default Index;

export async function getStaticProps() {
  const experiences = await prisma.experience.findMany({});

  return { props: { experiences } };
}
