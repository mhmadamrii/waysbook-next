import React from "react";

import ListAvailableBooksContent from "./ListAvailableBooks";

const getListOfBooks = async () => {
  const baseURL = "https://express-creation.vercel.app/api/v1/users";
  const res = await fetch(baseURL);
  return res.json();
};

export default async function ListAvailableBooks(props) {
  // const data = await getListOfBooks();
  // console.log("data expess", data);
  console.log("props parent", props);
  return <ListAvailableBooksContent />;
}
