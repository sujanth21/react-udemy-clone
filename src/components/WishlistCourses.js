import Courses from "./Courses";

import djangoEcomImg from "../img/django_ecommerce.jpg";
import djangoFullImg from "../img/django_fullstack.jpg";
import pythonImg from "../img/python_django.jpg";
import buildPyImg from "../img/build_python.jpg";
import reactDjImg from "../img/react_django.jpg";

const WishlistCourses = () => {
  const courses = [
    {
      courseImage: djangoEcomImg,
      courseTitle: "Django Ecommerce | Build Advanced Django Web Application",
      courseAuthor: "Rathan Kumar",
      courseRating: "4.8",
      ratingNumbers: "57",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
    },
    {
      courseImage: djangoFullImg,
      courseTitle: "Django 3 - Full Stack Websites with Python Web Development",
      courseAuthor: "Nick Walter",
      courseRating: "4.7",
      ratingNumbers: "3,091",
      coursePrice: "A$139.99",
      currentPrice: "A$24.99",
    },
    {
      courseImage: pythonImg,
      courseTitle: "Python Django Dev To Deployment",
      courseAuthor: "Brad Traversy",
      courseRating: "4.6",
      ratingNumbers: "4,532",
      coursePrice: "A$129.99",
      currentPrice: "A$22.99",
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      courseImage: buildPyImg,
      courseTitle: "Build Python Django Real Project: Django Web Development",
      courseAuthor: "Rathan Kumar",
      courseRating: "4.5",
      ratingNumbers: "168",
      coursePrice: "A$89.99",
      currentPrice: "A$14.99",
    },
    {
      courseImage: reactDjImg,
      courseTitle:
        "React & Django Full Stack: web app, backend API, mobile apps",
      courseAuthor: "Krystian Czekalski",
      courseRating: "4.3",
      ratingNumbers: "1,172",
      coursePrice: "A$119.99",
      currentPrice: "A$19.99",
    },
  ];
  return (
    <Courses
      heading='Because you wishlisted '
      link='“Django with React | An Ecommerce Website”'
      courses={courses}
    />
  );
};

export default WishlistCourses;
