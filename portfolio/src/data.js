import currency from "./assests/currency.png";
import stay from "./assests/stayhaven.jpg";
import book from "./assests/Untitled.png";
import note from "./assests/note.png";

export const projects = [
  {
    title: "StayHaven",
    subtitle: "Group Project",
    description:
      "Stayhaven, a Full Stack application made by Team Sequelize. Essentially a quick, responsive website hosted on Heroku in which prospective tennants and landlords can use.",
    image: stay,
    link: "https://radiant-bayou-46133.herokuapp.com/",
  },
  {
    title: "MoneyMail",
    subtitle: "Group Project",
    description:
      "MoneyMail. An app that allows you to exchange currencies with a click of a button. The chosen currencies will display news articles, informing users of current news surrounding the currency.",
    image: currency,
    link: "https://ss12932.github.io/currency-news-project/",
  },
  {
    title: "Book Search",
    subtitle: "MERN Stack app",
    description:
      "This application is an interactive book search which allows you to log in and save your books that you search. It follows the MERN stack, so the technologies include React.js, MonogDB, Express.js, Node.JS.",
    image: book,
    link: "https://keyur-book-search.herokuapp.com/",
  },
  {
    title: "Note Taker",
    subtitle: "Express.js",
    description:
      "This project uses express.js to create a note taker app. It allows you to write, save and delete any notes.",
    image: note,
    link: "https://keyur-note-taker.herokuapp.com/",
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Express.js",
  "Node",
  "GraphQL",
  "Tailwind",
];
