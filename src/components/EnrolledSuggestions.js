import Courses from "./Courses";

import reactImg from "../img/styled_components.jpg";
import htmlImg from "../img/html_css.jpg";
import dataImg from "../img/data_visualization.jpg";
import threeImg from "../img/threejs.jpg";
import cssAnimImg from "../img/css_animation.jpg";

const EnrolledSuggestions = () => {
  const courses = [
    {
      courseImage: reactImg,
      courseTitle: "React Styled Components Course",
      courseAuthor: "John Smilga",
      courseRating: "4.7",
      ratingNumbers: "341",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      courseImage: htmlImg,
      courseTitle: "10 Mega Responsive Websites with HTML, CSS, and JavaScript",
      courseAuthor: "Code And Create, George Lomidze, Lasha Nozadze",
      courseRating: "4.6",
      ratingNumbers: "255",
      coursePrice: "A$99.99",
      currentPrice: "A$16.99",
    },
    {
      courseImage: dataImg,
      courseTitle: "Learn and Understand D3.js for Data Visualization",
      courseAuthor: "Luis Ramirez Jr",
      courseRating: "4.6",
      ratingNumbers: "889",
      coursePrice: "A$109.99",
      currentPrice: "A$19.99",
    },
    {
      courseImage: threeImg,
      courseTitle: "Three.js and TypeScript",
      courseAuthor: "Sean Bradley",
      courseRating: "4.4",
      ratingNumbers: "310",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      courseImage: cssAnimImg,
      courseTitle: "Mega CSS Animation Course : 30 Projects Included",
      courseAuthor: "Supriyo Kundu",
      courseRating: "4.6",
      ratingNumbers: "100",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
    },
  ];
  return (
    <Courses
      heading='Because you enrolled in'
      link='"Creative Advanced CSS Animations - Create 100 Projects!"'
      courses={courses}
    />
  );
};

export default EnrolledSuggestions;
