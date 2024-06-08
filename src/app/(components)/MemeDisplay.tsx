"use client";
import { Anton } from "next/font/google";
import Image from "next/image";
import { useElementSize } from "usehooks-ts";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const MemeDisplay = ({
  background,
  textareas,
  values,
}: {
  background: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  textareas: {
    id: string;
    top: number;
    left: number;
    width: number;
    height: number;
    color: string;
    fontSize: number;
    text: string;
  }[];
  values: Record<string, string>;
}) => {
  const [memeRef, { width }] = useElementSize();

  const ratio = width ? width / background.width : 0;

  return (
    <div className="relative" ref={memeRef}>
      <Image
        src={background.src}
        width={background.width}
        height={background.height}
        alt={background.alt}
      />
      {textareas.map((textarea) => (
        <div
          key={textarea.id}
          className="absolute"
          style={{
            top: textarea.top * ratio,
            left: textarea.left * ratio,
            width: textarea.width * ratio,
            height: textarea.height * ratio,
          }}
        >
          <div
            className={`${anton.className} text-center text-${textarea.color} text-stroke-${textarea.color}`}
            style={{
              fontSize: textarea.fontSize * ratio,
              lineHeight: "1.1",
            }}
          >
            {values?.[textarea.id] ?? textarea.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeDisplay;
