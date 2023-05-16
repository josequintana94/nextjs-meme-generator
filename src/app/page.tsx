import MemeDisplay from "./(components)/MemeDisplay";

export default async function Home() {
  const memeTemplatesReq = await fetch("http://localhost:3000/api/templates");
  const memeTemplates = await memeTemplatesReq.json();

  // console.log(memeTemplates);

  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="max-w-[300px]">
        <MemeDisplay {...memeTemplates[1]} />
      </div>
    </main>
  );
}
