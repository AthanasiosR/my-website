import EcommerceProject from "../components/pictures/EcommerceProjects.png";
import Hockeytrivia from "../components/pictures/HockeyTrivia.png";
import Hangman from "../components/pictures/Hangman2.png";
import TicTacToe from "../components/pictures/TicTacToe.png";
import WordFrenzy from "../components/pictures/WordFrenzy.png";
import Critter from "../components/pictures/CritterHome.png";

export const ProjectsData = [
  {
    image: Hangman,
    title: "Hangman",
    description:
      "The classic hangman game you've been playing for years. Try and guess the sport before you run out of guesses.",
    languagesUsed: ["HTML & CSS,", " JavaScript,", " React"],
    link: "https://github.com/AthanasiosR/Hangman",
    demo: "https://classic-hangman-game.netlify.app",
  },
  {
    image: WordFrenzy,
    title: "Word Frenzy",
    description:
      "In this typing game, you have to correctly spell as many given words as possible in 30 seconds.",
    languagesUsed: ["HTML & CSS,", " JavaScript,", " React"],
    link: "https://github.com/AthanasiosR/Word-Frenzy",
    demo: "https://wordfrenzy.netlify.app",
  },
  {
    image: Hockeytrivia,
    title: "Hockey Trivia",
    description:
      "Hockey Trivia is a quiz app to test your hockey knowledge and see how much you really know about the sport. The app is created using React.Js and React hooks (useState) to keep track of the users score.",
    languagesUsed: ["HTML & CSS,", " JavaScript,", " React"],
    link: "https://github.com/AthanasiosR/Hockey-Trivia",
    demo: "https://hockey-trivia.netlify.app",
  },
  
  {
    image: TicTacToe,
    title: "Tic-Tac-Toe",
    description:
      " Recreated the classic tic-tac-toe game that everyone loves. Features include: Game board / Shows whose turn it is / Shows who has won the game / Has a game/turn history at the bottom so that the players can go back to any move that they did.",
    languagesUsed: ["HTML & CSS,", " JavaScript,", " React"],
    link: "https://github.com/AthanasiosR/TIC-TAC-TOE",
    demo: "https://classic-tictactoe-game.netlify.app",
  },
  
  {
    image: EcommerceProject,
    title: "E-commerce Website",
    description:
      "An E-commerce website that displays items that are for sale. Features include multiple categories pages / an items detail page / a cart / a checkout modal for the customers information / an order confirmation page. *There is no live demo yet for this project",
    languagesUsed: [
      "HTML & CSS,",
      " JavaScript,",
      " React,",
      " Redux,",
      " Node.JS",
    ],
    link: "https://github.com/AthanasiosR/project-GROUP-e-commerce",
  },
  {
    image: Critter,
    title: "Critter (Twitter CLone)",
    description:
      "Cricker is a Twitter clone project. The project fetches tweet data from database and displays all tweets on a homepage. Features include: A home page / A profile page for the user / Can post a tweet / Can also “like” a tweet. *There is no live demo yet for this project",
    languagesUsed: ["HTML & CSS,", " JavaScript,", " React,", " Node.js"],
    link: "https://github.com/AthanasiosR/project-m5-twitter-clone",
  },
];
