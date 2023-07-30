export default function UserHomepage({ params }) {
  console.log("paramsnya", params);
  return (
    <>
      <h1>Welcome {params?.user}</h1>
    </>
  );
}
