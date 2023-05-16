import MemeDisplay from "./(components)/MemeDisplay";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <MemeDisplay
        background={{
          src: "/disaster-girl.jpg",
          width: 1200,
          height: 900,
          alt: "Disaster Girl",
        }}
        textareas={[
          {
            id: "saying",
            top: 750,
            left: 100,
            width: 1000,
            height: 100,
            fontSize: 100,
            color: "white",
            text: "I'm gonna be rich!",
          },
        ]}
      />
    </main>
  );
}
