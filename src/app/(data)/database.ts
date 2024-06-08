import { Meme } from "./types";

const database: Meme[] = [
  {
    id: "1",
    template: "guy-looking",
    values: {
      old: "Theo",
      person: "Javascript Dev",
      new: "Blue Collar Coder",
    },
  },
  {
    id: "2",
    template: "drake",
    values: {
      top: "Java",
      bottom: "JavaScript",
    },
  },
  {
    id: "3",
    template: "disaster-girl",
    values: {
      tagline: "When you see the code",
    },
  },
];

export default database;
