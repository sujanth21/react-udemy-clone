import Courses from "./Courses";

import modernJSImg from "../img/modernjavas.jpg";
import nextImg from "../img/next.jpg";
import reactImg from "../img/modernrea.jpg";
import mernImg from "../img/mern.jpg";
import nodeImg from "../img/nodeapi.jpg";

const FeaturedCourses = () => {
  const courses = [
    {
      courseImage: modernJSImg,
      courseTitle: "The Modern Javascript Bootcamp Course (2021)",
      courseAuthor: "Colt Steel",
      courseRating: "4.9",
      ratingNumbers: "6,852",
      coursePrice: "A$99.99",
      currentPrice: "A$19.99",
      tag: "Top rated",
      tagColor: "#ff9999",
    },
    {
      courseImage: nextImg,
      courseTitle: "Next.js Dev to Deployment",
      courseAuthor: "Brad Traversy",
      courseRating: "4.9",
      ratingNumbers: "256",
      coursePrice: "A$99.99",
      currentPrice: "A$19.99",
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      courseImage: reactImg,
      courseTitle: "The Modern React Bootcamp (Hooks, Context, NextJS, Router)",
      courseAuthor: "Colt Steel",
      courseRating: "4.9",
      ratingNumbers: "26,509",
      coursePrice: "A$99.99",
      currentPrice: "A$19.99",
      tag: "Top rated",
      tagColor: "#ff9999",
    },
    {
      courseImage: mernImg,
      courseTitle:
        "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      courseAuthor: "Brad Traversy",
      courseRating: "4.9",
      ratingNumbers: "12,791",
      coursePrice: "A$99.99",
      currentPrice: "A$19.99",
      tag: "Top rated",
      tagColor: "#ff9999",
    },
    {
      courseImage: nodeImg,
      courseTitle: "Node.js API Masterclass With Express & MongoDB",
      courseAuthor: "Brad Traversy",
      courseRating: "4.9",
      ratingNumbers: "3,284",
      coursePrice: "A$99.99",
      currentPrice: "A$19.99",
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
  ];
  return (
    <Courses
      heading='Featured courses in '
      link='Web Development'
      courses={courses}
    />
  );
};

export default FeaturedCourses;
