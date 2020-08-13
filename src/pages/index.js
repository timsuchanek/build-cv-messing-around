import React from "react";
import { startingForm, ls } from "../utils"; // if we remove `startingForm` from the import, it works
// it doesn't matter, if we use startingForm in the frontend or not

const Index = (props) => {
  console.log(startingForm)
  return <h1>Hello{JSON.stringify(props, null, 2)}</h1>;
};

export default Index;

export async function getStaticProps() {
  const dir = ls()

  return { props: { dir } };
}
