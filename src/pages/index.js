import React from "react";
import { prisma } from "../utils/prismaClient";
// import { startingForm, prisma } from "../utils"; // Like this it will cause the error: Can't resolve 'async_hooks' in @prisma/cluent/runtime
// import { startingForm } from "../utils"; // Like this it will cause the error: Can't resolve 'async_hooks' in @prisma/cluent/runtime
import { startingForm } from "../utils/startingForm";
// import { prisma } from "../utils"; // Here prisma gets imported nicely as well. Its only whenever I try to import startingForm from the same place

const Index = (props) => {
  return <h1>Hello</h1>;
};

export default Index;

export async function getStaticProps() {
  const experiences = await prisma.experience.findMany({});

  return { props: { experiences } };
}
