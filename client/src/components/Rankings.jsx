import React from 'react';
import './styling.css';
import totalScore from './images/totalscore.png'
import StarFill from './images/starfillup.png'
import ThreeCharts from './images/threeCharts.png'


const Rankings = () => (
    <div className="containerR">
        <img id="totalR" src={totalScore}></img>
        <img id="starFillR" src={StarFill}></img>
        <img id="threePieR" src= {ThreeCharts}></img>
    </div>
  );


  export default Rankings 