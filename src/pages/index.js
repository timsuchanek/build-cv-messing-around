import React from "react";
import { prisma } from "../utils/prismaClient";
import { startingForm } from "../utils/startingForm";
// import { startingForm, getAll } from "../utils";

const Index = (props) => {
  return <h1>Hello</h1>;
};

export default Index;

export async function getStaticProps() {
  const experiences = await prisma.experience.findMany({});

  return { props: { experiences } };
}
