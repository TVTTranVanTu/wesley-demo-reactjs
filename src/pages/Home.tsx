import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Lessons from '../components/Lesson';
import Plugin from '../components/Plugin';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Lessons />
      <Plugin />
      <Footer />
    </div>
  );
};
export default Home;
