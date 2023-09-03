const getData = async () => {
  const res = await fetch("http://localhost:3000/api/jsonplaceholder", {
    method: "GET",
  });
  if (res.ok) {
    return res.json;
  }
  return [];
};

export default async function Playground() {
  const data = await getData();
  console.log("the data", data);
  return (
    <>
      <h1>Playground</h1>
      <h1>blabalfjds</h1>
      <button>make a call</button>
    </>
  );
}
