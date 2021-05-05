import Courses from "./Courses";

import javascriptImg from "../img/javascript_algo.jpg";
import reactImg from "../img/adva_rea.jpg";
import vueImg from "../img/vue.jpg";
import gitImg from "../img/git.jpg";
import webBootImg from "../img/web_boot.jpg";

const TopCourses = () => {
  const courses = [
    {
      courseImage: javascriptImg,
      courseTitle: "JavaScript Algorithms and Data Structures Masterclass",
      courseAuthor: "Colt Steel",
      courseRating: "4.9",
      ratingNumbers: "14,096",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      courseImage: reactImg,
      courseTitle: "Modern React with Redux [2020 Update]",
      courseAuthor: "Stephen Grider",
      courseRating: "4.9",
      ratingNumbers: "67,978",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
    },
    {
      courseImage: vueImg,
      courseTitle:
        "Vue - The Complete Guide (w/ Router, Vuex, Composition API)",
      courseAuthor: "Maximilian Schwarzmüller",
      courseRating: "4.8",
      ratingNumbers: "46,700",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
    },
    {
      courseImage: webBootImg,
      courseTitle: "The Web Developer Bootcamp 2021",
      courseAuthor: "Colt Steel",
      courseRating: "4.9",
      ratingNumbers: "203,417",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
      tag: "Top rated",
      tagColor: "#ff9999",
    },
    {
      courseImage: gitImg,
      courseTitle: "The Git & Github Bootcamp",
      courseAuthor: "Colt Steel",
      courseRating: "4.9",
      ratingNumbers: "1,124",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
    },
  ];
  return (
    <Courses
      heading='Top courses in '
      link='Web Development'
      courses={courses}
    />
  );
};

export default TopCourses;
