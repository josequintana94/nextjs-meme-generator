import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const MemeDisplay = ({
  background,
}: {
  background: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}) => {
  return (
    <div className="relative">
      <Image
        src={background.src}
        width={background.width}
        height={background.height}
        alt={background.alt}
      />
      <div
        className="absolute"
        style={{
          top: 760,
          left: 100,
          width: 1000,
          height: 100,
        }}
      >
        <div
          className={`${anton.className} text-center text-white text-stroke-white`}
          style={{
            fontSize: 100,
            lineHeight: "1.1",
          }}
        >
          Really?
        </div>
      </div>
    </div>
  );
};

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
      />
    </main>
  );
}
