import React from "react";

const ListAvailableBooksContent = () => {
  const renders = React.useRef(0);
  console.log("list availablebookscontent", renders.current++);
  return (
    <main>
      <h1>Available books</h1>
    </main>
  );
};

export default React.memo(ListAvailableBooksContent);
