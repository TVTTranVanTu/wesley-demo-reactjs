import React from "react";
import Footer from "../components/Footer";
import Lessons from "../components/Lesson";
import Plugin from "../components/Plugin";

const Home: React.FC = () => {
  console.log("this home page");

  return (
    <div className="home">
      <Lessons />
      <Plugin />
      <Footer />
    </div>
  );
};
export default Home;
