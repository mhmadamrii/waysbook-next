import CardsItems from "@/src/components/CardItems";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default async function Homepage() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <main>
        <CardsItems data={data} />
      </main>
    </>
  );
}
