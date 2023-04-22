import React from 'react';
import CarouselComponent from './CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import homeFitness from '../images/home/homeFitness.jpg';
import scales from '../images/home/scales.jpg';
import yoga from '../images/yoga.jpg';
import workoutFriends from '../images/home/workoutFriends.jpg';
import fruit from '../images/fruit.jpg';
import myBody from '../images/home/myBody.jpg';
import foodRule from '../images/home/foodRule.jpg';

const App = () => {
  const images = [
    {
        id: 1,
        src: homeFitness,
        alt: 'Home Workout',
        name: 'Workout at home with our easy exercises',
    },
    {
        id: 2,
        src: scales,
        alt: 'Healthy eating',
        name: 'Eating healthy can help you stay fit',
    },
    {
        id: 3,
        src: workoutFriends,
        alt: 'Group Workout',
        name: 'Workout with Friends',
    },
    {
        id: 4,
        src: yoga,
        alt: 'Yoga',
        name: 'Let your fitness journey take you to new places',
    },
    {
        id: 5,
        src: fruit,
        alt: 'Fruit',
        name: 'Enjoy all the colours of the rainbow',
    },
    {
        id: 6,
        src: myBody,
        alt: 'My body My Rules',
        name: '',
    },
    {
        id: 7,
        src: foodRule,
        alt: '80/20 food rule',
        name: '',
    },
   
  ];

  return (
    <div className="App">
      <CarouselComponent images={images} />
    </div>
  );
};

export default App;
